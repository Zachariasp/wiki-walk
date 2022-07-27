from flask import Blueprint
import wikipediaapi

blueprint = Blueprint('wiki', __name__, url_prefix='/wiki')

@blueprint.route("/")
def hello():
    text = "Hello, World!"
    text += getPage()
    return text

def getPage():
    wiki = wikipediaapi.Wikipedia('en', wikipediaapi.ExtractFormat.HTML)
    page = wiki.page('frog')  # frog time :)
    page_text = page.text
    return page_text
