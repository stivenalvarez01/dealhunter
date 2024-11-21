const express = require('express'); // Importa Express
const cors = require('cors'); // Importa CORS
const puppeteer = require('puppeteer'); // Importa Puppeteer
require('dotenv').config(); // Cargar variables de entorno

const app = express(); // Crea una instancia de Express
app.use(cors()); // Habilita CORS

// Ruta para obtener detalles del producto
app.get('/api/product/:id', async (req, res) => {
  const productId = req.params.id;

  const url = `https://www.alkosto.com/p/${productId}`; // URL del producto

  try {
    const browser = await puppeteer.launch({
      headless: true, // Ejecutar en modo sin cabeza
      args: ['--no-sandbox', '--disable-setuid-sandbox'] // Configuración de Puppeteer para Heroku
    });

    const page = await browser.newPage();
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    );

    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

    const productData = await page.evaluate(() => {
      const title = document.querySelector('.product-name, .product-title')?.textContent.trim();
      const img = document.querySelector('.product-image-container img, .product-image')?.src;
      const priceElements = document.querySelectorAll('.price');
      const prices = Array.from(priceElements).map((el) => ({
        store: 'Alkosto',
        price: el.textContent.trim()
      }));
      const featureElements = document.querySelectorAll('.product-description-content li, .product-features li');
      const features = Array.from(featureElements).map((el) => el.textContent.trim());

      return { title, img, prices, features };
    });

    await browser.close();

    if (productData.title && productData.img) {
      res.json({ id: productId, ...productData });
    } else {
      res.status(404).json({
        error: 'Producto no encontrado',
        details: 'No se pudieron extraer los detalles del producto'
      });
    }
  } catch (error) {
    console.error('Error al obtener el producto:', error);
    res.status(500).json({ error: 'Error al obtener el producto', details: error.message });
  }
});

// Configurar puerto para Heroku
const PORT = process.env.PORT || 5000; // Usar el puerto asignado por Heroku o el puerto 5000
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

