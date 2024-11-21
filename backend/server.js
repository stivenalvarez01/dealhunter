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

const findElementContent = (document, selectors, type = 'textContent') => {
  for (const selector of selectors) {
    const element = document.querySelector(selector);
    if (element) {
      return type === 'src' ? element.src : element.textContent.trim();
    }
  }
  return null;
};

app.get('/api/product', async (req, res) => {
  const productUrl = req.query.url;

  if (!productUrl) {
    return res.status(400).json({
      error: 'URL de producto no proporcionada',
      details: 'Se requiere una URL válida'
    });
  }

  try {
    const productDetails = await scrapeProductDetails(productUrl);
    res.json(productDetails);  // Aquí es donde 'productDetails' se usa
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener detalles del producto' });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});