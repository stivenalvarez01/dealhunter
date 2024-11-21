# backend/scraper/scraper.py
from flask import Flask, jsonify, request
from search_scraper import get_product_list

app = Flask(__name__)

@app.route('/api/search', methods=['GET'])
def search():
    query = request.args.get('q')
    if not query:
        return jsonify({"error": "No se especificó un término de búsqueda"}), 400

    products = get_product_list(query)
    if not products:
        return jsonify({"error": "No se encontraron productos."}), 404
    return jsonify(products)

if __name__ == '__main__':
    app.run(debug=True)


# backend/scraper/scraper.py
from detail_scraper import get_product_details

@app.route('/api/details', methods=['GET'])
def details():
    url = request.args.get('url')
    if not url:
        return jsonify({"error": "No se especificó un URL de producto"}), 400

    details = get_product_details(url)
    return jsonify(details)