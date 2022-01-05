from flask import Flask, request,render_template,redirect,url_for,send_file
from flask_sqlalchemy import SQLAlchemy
import os
import sys
from flask import jsonify
from flask_cors import CORS

PEOPLE_FOLDER = os.path.join('static', 'uploads')
SECRET_KEY = os.urandom(32)
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)
app.config['SECRET_KEY'] = SECRET_KEY
app.config['UPLOAD_FOLDER'] = PEOPLE_FOLDER
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/home")
def home_page():
    files = {"file 1": "url", "file 2": "url"}
    return render_template('multi_download.html', files = files)

@app.route("/json", methods=['GET','POST'])
def json():
    if(request.method == 'POST'):
        print(request.headers)
        data = request.get_json(force=True)
        print(data)
        json_data = {"example 1": "cat", "example 2": "dog", "example 3": "bird"}
        return jsonify(json_data)

@app.route("/calculate-damage", methods=['GET', 'POST'])
def calculate_damage():
    if request.method == 'POST':
        print(request.data)


if __name__ == "__main__":        # on running python app.py
    # db.create_all()
    # import_mastersheet("mastersheet-demo.xlsx", db, "Banana")
    app.run(debug=True)  



