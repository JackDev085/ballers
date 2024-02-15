from flask import Flask,Blueprint
from routes.home import home_routes
from routes.arremessos import arrremessos_route

app = Flask(__name__)
app.register_blueprint(home_routes)
app.register_blueprint(arrremessos_route,url_prefix="/arremessos")


if __name__ == '__main__':
    app.run(debug=True)