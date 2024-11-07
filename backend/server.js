// server.js

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();
const PORT = 5000;

// Ruta de la API para búsqueda
app.get('/api/search', async (req, res) => {
  const query = req.query.q; // El término de búsqueda del usuario

  if (!query) {
    return res.status(400).json({ error: 'No se proporcionó un término de búsqueda.' });
  }

  const url = `https://www.alkosto.com/search?text=${encodeURIComponent(query)}`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    let products = [];

    $('.product-item-info').each((index, element) => {
      const name = $(element).find('.product__item__top__title js-algolia-product-click js-algolia-product-title').text().trim();
      const price = $(element).find('.price').text().trim();
      const link = $(element).find('.js-view-details js-algolia-product-click').attr('href');
      const image = $(element).find('.product__item__information__image js-algolia-product-click').attr('src');

      if (name && price && link) {
        products.push({ name, price, link, image });
      }
    });

    if (products.length === 0) {
      return res.status(404).json({ error: 'No se encontraron productos.' });
    }

    res.json(products);
  } catch (error) {
    console.error('Error al realizar scraping:', error.message);
    res.status(500).json({ error: 'Error al realizar scraping', details: error.message });
  }
});

// Ruta para la raíz, solo para mostrar que el servidor está corriendo
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente. Utiliza /api/search?q=tu_busqueda para buscar productos.');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
