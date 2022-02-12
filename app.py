from flask import Flask, send_from_directory
from flask_cors import CORS #comment this on deployment

app = Flask(__name__, static_url_path='', static_folder='frontend/build')

CORS(app)
@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

@app.route("/hello")
def hello_world():
    return "We track badminton tings"

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))