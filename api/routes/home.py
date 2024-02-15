from flask import render_template,Blueprint
home_routes = Blueprint('home', __name__)

@home_routes.route('/')
def home():
    return render_template('test.html',title='Ballers',css="css/styles.css")