from flask import Flask, render_template
from flask_cors import CORS #comment this on deployment

app = Flask(__name__, static_url_path='',
                  static_folder='front-end/build',
                  template_folder='front-end/build')

@app.route("/")
def hello():
    return render_template("index.html")

@app.route("/hello")
def hello_world():
    return "We track badminton tings"

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))