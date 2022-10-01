from flask import Blueprint
import wikipediaapi

blueprint = Blueprint('wiki', __name__, url_prefix='/wiki')

@blueprint.route("/")
def hello():
    text = "Hello, World! "
    text += get_links_from_page('frog')
    return text

def get_page():
    wiki = wikipediaapi.Wikipedia('en', wikipediaapi.ExtractFormat.HTML)
    page = wiki.page('frog') #frog time :)
    page_text = page.text
    return page_text

def get_links_from_page(title):
    wiki = wikipediaapi.Wikipedia('en', wikipediaapi.ExtractFormat.HTML)
    page = wiki.page(title)
    pageLinks = page.links
    pageLinkTitles = ""
    for pageLink in pageLinks:
        pageLinks[pageLink].backlinks
        pageLinkTitles += "["+ pageLinks[pageLink].title + "]    "
    return pageLinkTitles