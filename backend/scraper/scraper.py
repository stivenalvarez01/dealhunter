import requests
from bs4 import BeautifulSoup

URL = "https://www.alkosto.com/search?text=celular%20xiaomi"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"
}

try:
    response = requests.get(URL, headers=headers)
    print("Código de estado:", response.status_code)

    if response.status_code == 200:
        soup = BeautifulSoup(response.content, "html.parser")
        # Extrae y muestra algún contenido de prueba
        print(soup.prettify())  # Solo para ver el contenido de la página
    else:
        print(f"Error al acceder a la página: {response.status_code}")
except requests.exceptions.RequestException as e:
    print("Error en la solicitud:", e)
