from flask import Flask
from rotas.home import home_routes
from rotas.arremessos import arrremessos_route

# from routes.arremessos import arrremessos_route
app = Flask(__name__)

app.register_blueprint(home_routes)
app.register_blueprint(arrremessos_route,url_prefix="/arremessos")

if __name__ == '__main__':
    app.run(debug=False)