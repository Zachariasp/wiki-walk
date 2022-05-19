from flask import Flask, send_from_directory
import os
import wikipediaapi

app = Flask(__name__)

@app.route("/")
def hello():
    text = "Hello, World!"
    text += getPage()
    return text

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),'favicon.ico',mimetype='image/vnd.microsoft.icon')

def getPage():
    wiki = wikipediaapi.Wikipedia('en', wikipediaapi.ExtractFormat.HTML)
    page = wiki.page('frog')
    page_text = page.text
    return page_text
