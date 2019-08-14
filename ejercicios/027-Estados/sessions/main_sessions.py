import os
from flask import Flask, json, Response, render_template, request,redirect, url_for,make_response,session
import datetime
import flask
import flask_login

app = Flask(__name__)

bd = {
    "usuarios": [
        {
            "usuario1":"usuario1",
            "nombre": "José Torres",
            "servicios": {
                "Emapag":"2342", 
                "Claro":"435", 
                "Movistar":"291"
            }
        },
        {
            "usuario2":"usuario2",
            "nombre": "María Pérez",
            "servicios": {
                "Emapag":"190", 
                "Claro":"21", 
                "Movistar":"20"
            }
        }
    ]
}

def obtenerUsuario(user):
    usuarios = bd["usuarios"]

    for usuario in usuarios:
        if user in usuario.keys() and user == usuario[user]:
            return usuario
    return None

@app.before_request
def before_request():
    flask.session.permanent = True
    app.permanent_session_lifetime = datetime.timedelta(minutes=20)
    flask.session.modified = True

@app.route('/datos_servicio')
def datos_servicio():
    user = session["user"]

    if user is not None:
        usuario = obtenerUsuario(user)
        return render_template("servicios.html",user=usuario[user], nombre=usuario['nombre'],servicios=usuario['servicios'] )
    return redirect(url_for('main'))


@app.route('/validar_registro', methods=['post'])
def validar_registro():
    if request.method == 'POST':

        user = request.form.get('user')
        password = request.form.get('password')

        usuario = obtenerUsuario(user)
        if usuario is not None:
            session.clear()
            session["user"] = user
            return render_template("index.html",user=usuario[user], nombre=usuario['nombre'])
    
    return redirect(url_for('main'))

@app.route('/')
def main():
    return render_template("login.html")

if __name__ == '__main__':

    app.secret_key = "afsda3h#@$@#sfad/32342389SAFDASf"
    app.run(debug=True, host='127.0.0.1', port='5000')