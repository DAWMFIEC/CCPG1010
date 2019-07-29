from flask import Flask, request, render_template, make_response
app = Flask(__name__)

account_balance = 1000

@app.route('/', methods=['GET', 'POST'])
def transfer():
	response = make_response(render_template('ataque.html'))
	return response

if __name__ == '__main__':
	app.run(host='127.0.0.1', port=5001, debug=True)