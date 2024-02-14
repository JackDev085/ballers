from flask import Flask,render_template

app = Flask(__name__)

@app.route('/')
def home():
    return '<h1>testando apenas</h1>'
@app.route('/teste')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return 'About'
