// server.js

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();
const PORT = 5000;

app.get('/api/search', async (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ error: 'No se proporcionó un término de búsqueda.' });
  }

  const url = `https://www.alkosto.com/search?text=${encodeURIComponent(query)}`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    let products = [];

    $('.product-item-info').each((index, element) => {
      const title = $(element)
        .find('.product__item__top__title.js-algolia-product-click.js-algolia-product-title')
        .text()
        .trim();
      const price = $(element).find('.price').text().trim();
      const link = $(element)
        .find('.js-view-details.js-algolia-product-click')
        .attr('href');
      const img = $(element)
        .find('.product__item__information__image.js-algolia-product-click')
        .attr('src');

      if (title && link) {
        // Generar ID único a partir del link
        const id = link.split('/').pop(); // Obtiene el último segmento del enlace como ID
        products.push({ id, title, price, link, img });
      }
    });

    if (products.length === 0) {
      return res.status(404).json({ error: 'No se encontraron productos.' });
    }

    console.log('Productos enviados:', products); // Asegúrate de que se generen correctamente
    res.json(products);
  } catch (error) {
    console.error('Error al realizar scraping:', error.message);
    res.status(500).json({ error: 'Error al realizar scraping', details: error.message });
  }
});

app.get('/api/product/:id', async (req, res) => {
  const productId = req.params.id; // Obtiene el id del producto de la URL
  const url = `https://www.alkosto.com/producto/${productId}`; // Cambia esta URL según cómo esté estructurado tu sitio o base de datos

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    // Extrae los detalles del producto
    const title = $('.product__title').text().trim();  // Ajusta el selector según la página real
    const img = $('.product__image').attr('src');
    const prices = [];
    $('.product__price').each((index, element) => {
      prices.push({
        store: 'Alkosto', // Ejemplo, deberías ajustar esto
        price: $(element).text().trim()
      });
    });
    const features = [];
    $('.product__features').each((index, element) => {
      features.push($(element).text().trim());
    });

    if (title && img && prices.length) {
      const product = {
        id: productId,
        title,
        img,
        prices,
        features
      };
      res.json(product); // Devuelve los datos del producto
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener el producto:', error.message);
    res.status(500).json({ error: 'Error al obtener el producto', details: error.message });
  }
});



app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
