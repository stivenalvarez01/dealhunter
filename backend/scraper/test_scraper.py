import requests
from bs4 import BeautifulSoup

# URL completa de la página de resultados
url = "https://www.alkosto.com/search?text=celular%20xiaomi"
response = requests.get(url)

if response.status_code == 200:
    # Crear un objeto BeautifulSoup con el contenido HTML
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Probar si encuentra el primer producto en la lista de resultados
    product = soup.find('h3', class_="product__item__top__title")
    if product:
        print("Producto encontrado:", product.text)
    else:
        print("No se encontraron productos.")
else:
    print(f"Error al acceder a la página: {response.status_code}")
