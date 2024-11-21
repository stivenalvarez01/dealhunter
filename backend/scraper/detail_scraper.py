from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.edge.service import Service
from selenium.webdriver.edge.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.microsoft import EdgeChromiumDriverManager
import time
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def get_product_details(product_id):
    edge_options = Options()
    edge_options.add_argument("--headless")
    # Añadir opciones para manejar certificados SSL
    edge_options.add_argument("--ignore-certificate-errors")
    edge_options.add_argument("--ignore-ssl-errors")
    edge_options.add_argument("--disable-web-security")
    edge_options.add_argument("--allow-insecure-localhost")
    
    driver = None
    try:
        service = Service(EdgeChromiumDriverManager().install())
        driver = webdriver.Edge(service=service, options=edge_options)
        
        url = f"https://www.alkosto.com/p/{product_id}"
        logger.info(f"Abriendo URL: {url}")
        
        driver.set_page_load_timeout(30)
        driver.get(url)
        
        wait = WebDriverWait(driver, 30)  # Aumentar tiempo de espera
        
        # Intentar múltiples selectores para mayor robustez
        selectors = [
            (By.CLASS_NAME, "product-title"),
            (By.CSS_SELECTOR, "h1.product-name"),
            (By.TAG_NAME, "h1")
        ]
        
        title = None
        for selector in selectors:
            try:
                title_element = wait.until(EC.presence_of_element_located(selector))
                title = title_element.text
                if title:
                    break
            except:
                continue
        
        if not title:
            logger.error("No se pudo encontrar el título del producto")
            return None

        # Similar para imagen y precio
        img_selectors = [
            (By.CLASS_NAME, "product-image"),
            (By.CSS_SELECTOR, "img.product-image"),
            (By.TAG_NAME, "img")
        ]
        
        img = None
        for selector in img_selectors:
            try:
                img_element = wait.until(EC.presence_of_element_located(selector))
                img = img_element.get_attribute("src")
                if img:
                    break
            except:
                continue
        
        price_selectors = [
            (By.CLASS_NAME, "product-price"),
            (By.CSS_SELECTOR, "span.price"),
            (By.CLASS_NAME, "price")
        ]
        
        price = None
        for selector in price_selectors:
            try:
                price_element = wait.until(EC.presence_of_element_located(selector))
                price = price_element.text
                if price:
                    break
            except:
                continue

        # Descripción y características con múltiples intentos
        description = "Descripción no disponible"
        features = []
        
        try:
            description_elements = driver.find_elements(By.CSS_SELECTOR, ".product-description, .description, .product-description-content")
            if description_elements:
                description = description_elements[0].text
        except:
            pass

        try:
            feature_elements = driver.find_elements(By.CSS_SELECTOR, ".product-description-content li, .product-features li, .features li")
            features = [feat.text for feat in feature_elements]
        except:
            pass

        product_data = {
            "id": product_id,
            "title": title or "Título no disponible",
            "img": img or "",
            "price": price or "Precio no disponible",
            "description": description,
            "features": features
        }

        return product_data

    except Exception as e:
        logger.error(f"Error al obtener detalles del producto {product_id}: {e}")
        return None
    
    finally:
        if driver:
            driver.quit()