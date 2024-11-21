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
    """Configura el webdriver de Edge."""
    edge_options = Options()
    edge_options.add_argument("--headless")
    edge_options.add_argument("--ignore-certificate-errors")
    edge_options.add_argument("--ignore-ssl-errors")
    edge_options.add_argument("--disable-web-security")
    edge_options.add_argument("--allow-insecure-localhost")
    edge_options.add_argument('--no-sandbox')
    edge_options.add_argument('--disable-dev-shm-usage')
    
    return webdriver.Edge(
        service=Service(EdgeChromiumDriverManager().install()), 
        options=edge_options
    )

def get_product_details(product_url):
    """Extrae detalles de un producto dado su URL."""
    driver = None
    try:
        driver = configure_webdriver()
        logger.info(f"Abriendo URL: {product_url}")
        driver.get(product_url)

        wait = WebDriverWait(driver, 30)
        
        # Selectores generales
        selectors = {
            "title": [".product-name", ".product-title", "h1"],
            "image": [".product-image img", ".main-image", "img"],
            "price": [".price", ".current-price", "[data-price]"],
            "description": [".product-description", ".description-content"],
            "features": [".product-description-content li", ".features li"]
        }

        def extract_content(selectors, attr="textContent"):
            for selector in selectors:
                try:
                    element = wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, selector)))
                    if attr == "src":
                        return element.get_attribute("src")
                    return element.text.strip()
                except:
                    continue
            return None

        product_data = {
            "title": extract_content(selectors["title"]),
            "image": extract_content(selectors["image"], "src"),
            "price": extract_content(selectors["price"]),
            "description": extract_content(selectors["description"]),
            "features": [
                el.text.strip()
                for el in driver.find_elements(By.CSS_SELECTOR, selectors["features"][0])
            ]
        }

        return product_data

    except Exception as e:
        logger.error(f"Error al obtener detalles del producto: {e}")
        return None
    finally:
        if driver:
            driver.quit()

if __name__ == "__main__":
    url = "https://www.alkosto.com/p/some-product-id"
    details = get_product_details(url)
    print(details)
