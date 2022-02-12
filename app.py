from flask import Flask
from flask_cors import CORS #comment this on deployment

#app = Flask(__name__, static_folder='frontend/build', static_url_path='/')
app = Flask(__name__)

CORS(app)
@app.route('/')
def index():
    return "Hello world"
    #return app.send_static_file('index.html')

@app.route("/hello")
def hello_world():
    return "We track badminton tings"

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))