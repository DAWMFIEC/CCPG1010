#coding: utf-8
import os
from flask import Flask, json, Response, render_template, request,redirect, url_for

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


@app.route('/datos_servicio', methods=['post'])
def datos_servicio():
    if request.method == 'POST':

        user = request.form.get('user')

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
            return render_template("index.html",user=usuario[user], nombre=usuario['nombre'] )
    
    return redirect(url_for('main'))

@app.route('/')
def main():
    return render_template("login.html")

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port='5000')