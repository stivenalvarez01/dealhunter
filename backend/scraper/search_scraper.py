import logging
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.edge.service import Service
from selenium.webdriver.edge.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.microsoft import EdgeChromiumDriverManager

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def configure_webdriver():
    """Configuración centralizada del webdriver"""
    edge_options = Options()
    edge_options.add_argument("--headless")
    edge_options.add_argument("--ignore-certificate-errors")
    edge_options.add_argument("--ignore-ssl-errors")
    edge_options.add_argument("--disable-web-security")
    edge_options.add_argument("--allow-insecure-localhost")
    
    # Opciones adicionales para estabilidad
    edge_options.add_argument('--no-sandbox')
    edge_options.add_argument('--disable-dev-shm-usage')
    
    return webdriver.Edge(
        service=Service(EdgeChromiumDriverManager().install()), 
        options=edge_options
    )

def get_product_list(search_term):
    driver = None
    products = []
    
    try:
        driver = configure_webdriver()
        driver.set_page_load_timeout(30)
        
        url = f"https://www.alkosto.com/search?text={search_term.replace(' ', '%20')}"
        logger.info(f"Abriendo URL: {url}")
        
        driver.get(url)
        
        # Esperar explícitamente a que carguen los productos
        wait = WebDriverWait(driver, 20)
        wait.until(EC.presence_of_element_located((By.CLASS_NAME, "product__item")))

        # Encontrar todos los elementos de productos
        items = driver.find_elements(By.CLASS_NAME, "product__item")
        logger.info(f"Se encontraron {len(items)} productos.")
        
        # Set para evitar duplicados por ID
        processed_ids = set()
        
        for item in items:
            try:
                # Esperar a que los elementos estén presentes
                title_element = WebDriverWait(item, 10).until(
                    EC.presence_of_element_located((By.CLASS_NAME, "product__item__top__title"))
                )
                title = title_element.text

                # Extraer enlace y ID del producto
                link_element = WebDriverWait(item, 10).until(
                    EC.presence_of_element_located((By.CLASS_NAME, "js-view-details"))
                )
                link = link_element.get_attribute("href")
                product_id = link.split('/p/')[-1] if '/p/' in link else None

                # Saltar si ya procesamos este producto
                if product_id in processed_ids:
                    continue

                # Manejar precio
                try:
                    price_element = WebDriverWait(item, 10).until(
                        EC.presence_of_element_located((By.CLASS_NAME, "product__price--discounts__price"))
                    )
                    price = price_element.text
                except:
                    price = "Precio no disponible"

                # Imagen
                try:
                    img_element = WebDriverWait(item, 10).until(
                        EC.presence_of_element_located((By.TAG_NAME, "img"))
                    )
                    img = img_element.get_attribute("src")
                except:
                    img = ""

                # Solo añadir si tiene ID único
                if product_id:
                    product_data = {
                        "id": product_id,
                        "title": title,
                        "price": price,
                        "link": link,
                        "img": img
                    }
                    products.append(product_data)
                    processed_ids.add(product_id)
                
                logger.info(f"Producto encontrado: {title}")
            
            except Exception as item_error:
                logger.error(f"Error al procesar un producto: {item_error}")
    
    except Exception as e:
        logger.error(f"Error general en la búsqueda: {e}")
    
    finally:
        if driver:
            driver.quit()
    
    return products

if __name__ == "__main__":
    search_term = "samsung"
    productos = get_product_list(search_term)
    for producto in productos:
        print(producto)