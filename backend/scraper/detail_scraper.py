# backend/scraper/detail_scraper.py
import requests
from bs4 import BeautifulSoup

def get_product_details(url):
    response = requests.get(url)
    if response.status_code != 200:
        return {"error": "No se pudo acceder al producto"}
    
    soup = BeautifulSoup(response.text, 'html.parser')
    try:
        # Extraer detalles específicos
        title = soup.find("h1", {"class": "product-title"}).text
        price = soup.find("span", {"class": "price"}).text
        description = soup.find("div", {"class": "product-description"}).text.strip()
        
        return {
            "title": title,
            "price": price,
            "description": description,
            "link": url
        }
    except AttributeError:
        return {"error": "No se encontraron los detalles del producto"}

