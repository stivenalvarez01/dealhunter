const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer');

const app = express();
app.use(cors());

const selectorsMap = {
  title: [
    '.product-name',
    '.product-title',
    'h1.product__item__top__title',
    'h1'
  ],
  image: [
    '.product-image-container img',
    '.product-image',
    '.product__item img',
    'img.main-image'
  ],
  price: [
    '.price',
    '.product__price--discounts__price',
    '.current-price',
    '[data-price]'
  ],
  features: [
    '.product-description-content li',
    '.product-features li',
    '.features li',
    '.specifications li'
  ],
  description: [
    '.product-description',
    '.product-details',
    '.description-content',
    '.product-info'
  ]
};

// Función que realiza el scraping de la categoría
const scrapeCategory = async (category) => {
  const url = `https://www.example.com/${category}`; // URL base para la categoría, adapta según el sitio web
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'load', timeout: 0 });

  const products = await page.evaluate((selectorsMap) => {
    const productsList = [];

    // Se asume que hay una lista de productos con una estructura similar
    const productElements = document.querySelectorAll('.product-item'); // Ajusta el selector según el HTML del sitio

    productElements.forEach((productElement) => {
      const title = findElementContent(productElement, selectorsMap.title);
      const image = findElementContent(productElement, selectorsMap.image, 'src');
      const price = findElementContent(productElement, selectorsMap.price);

      if (title && image && price) {
        productsList.push({
          title,
          image,
          price
        });
      }
    });

    return productsList;
  }, selectorsMap);

  await browser.close();
  return products;
};

// Función para obtener el contenido de un elemento
const findElementContent = (document, selectors, type = 'textContent') => {
  for (const selector of selectors) {
    const element = document.querySelector(selector);
    if (element) {
      return type === 'src' ? element.src : element.textContent.trim();
    }
  }
  return null;
};

// Endpoint para hacer scraping de una categoría
app.get('/api/scrape', async (req, res) => {
  const category = req.query.category;

  if (!category) {
    return res.status(400).json({
      error: 'Categoría no proporcionada',
      details: 'Se requiere una categoría válida'
    });
  }

  try {
    const products = await scrapeCategory(category);
    res.json(products);  // Devuelve los productos como JSON
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos de la categoría' });
  }
});

// Puerto para el servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
