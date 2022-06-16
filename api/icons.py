from flask import Blueprint, send_from_directory, current_app
import os

blueprint = Blueprint('icons', __name__, url_prefix='/icons')

@blueprint.route("/test")
def hello():
    return "Hello, World! From app.py with love!"

@blueprint.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(current_app.root_path, 'static'),'favicon.ico',mimetype='image/vnd.microsoft.icon')