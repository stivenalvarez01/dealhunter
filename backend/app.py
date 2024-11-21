from flask import Flask, jsonify, request
from flask_cors import CORS
import logging
from scraper.search_scraper import get_product_list
# Configuración del logger
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


# Crea la instancia de Flask
app = Flask(__name__)
CORS(app)  # Esto permite todas las solicitudes de origen cruzado


@app.route("/api/search", methods=["GET"])
def search_products():
    try:
        query = request.args.get('query', '')
        
        if not query:
            return jsonify({"error": "Se requiere un término de búsqueda"}), 400
        
        logger.info(f"Realizando búsqueda para: {query}")
        
        search_results = get_product_list(query)
        
        # Añadir más logging
        logger.info(f"Resultados encontrados: {len(search_results)}")
        logger.info(f"Primer producto: {search_results[0] if search_results else 'No hay productos'}")
        
        return jsonify(search_results)
    
    except Exception as e:
        logger.error(f"Error en la búsqueda: {str(e)}")
        return jsonify({
            "error": "Error al realizar la búsqueda", 
            "details": str(e)
        }), 500

if __name__ == "__main__":
    app.run(debug=True)