from flask import Flask, jsonify, request
from flask_cors import CORS
from scraper.search_scraper import get_product_list

app = Flask(__name__)
CORS(app)

@app.route("/api/search", methods=["GET"])
def search_products():
    query = request.args.get("query")
    products = get_product_list(query)
    print("Productos enviados:", products)  # Verificar en consola del servidor
    return jsonify(products)

if __name__ == "__main__":
    app.run(debug=True)
