# backend/scraper/search_scraper.py
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.edge.service import Service
from selenium.webdriver.edge.options import Options
import time

def get_product_list(search_term):
    edge_options = Options()
    edge_options.add_argument("--headless")
    service = Service('C:\\Users\\ASUS\\Downloads\\edgedriver_win64\\msedgedriver.exe')

    print("Iniciando EdgeDriver...")
    driver = webdriver.Edge(service=service, options=edge_options)
    
    url = f"https://www.alkosto.com/search?text={search_term.replace(' ', '%20')}"
    print(f"Abriendo URL: {url}")
    driver.get(url)
    time.sleep(2)

    products = []
    try:
        items = driver.find_elements(By.CLASS_NAME, "product__item")
        print(f"Se encontraron {len(items)} productos.")
        
        for item in items:
            try:
                title = item.find_element(By.CLASS_NAME, "product__item__top__title").text

                # Busca el contenedor principal de precio
                try:
                    base_price_container = item.find_element(By.CLASS_NAME, "product__item__information__base-price")
                    discount_price_container = base_price_container.find_element(By.CLASS_NAME, "product__price--discounts__price")
                    price = discount_price_container.find_element(By.CLASS_NAME, "price").text
                except Exception:
                    price = "Precio no disponible"

                # Obtener el enlace y generar ID
                link_element = item.find_element(By.CLASS_NAME, "js-view-details")
                link = link_element.get_attribute("href")
                product_id = link.split('/')[-1]  # Generar ID a partir del último segmento del enlace
                
                img = item.find_element(By.TAG_NAME, "img").get_attribute("src")

                products.append({
                    "id": product_id,  # Añadir ID generado
                    "title": title,
                    "price": price,
                    "link": link,
                    "img": img
                })
                print(f"Producto encontrado: {title}, ID: {product_id}")
            except Exception as e:
                print("Error al extraer producto:", e)
    
    finally:
        driver.quit()
    
    return products