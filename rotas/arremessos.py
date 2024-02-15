from flask import render_template,Blueprint
arrremessos_route = Blueprint('arremessos',__name__)


@arrremessos_route.route('/')
def listaArremessos():
  return render_template('arremessos.html', title='arremessos',css="css/arremessos.css")


@arrremessos_route.route('/treino/1')
def rotinaArremessos():
  return render_template('rotina_arremessos.html', title='rotina de arremessos',css="css/rotina_arremessos.css")

