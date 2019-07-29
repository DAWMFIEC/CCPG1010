from flask import Flask, request, render_template, make_response
app = Flask(__name__)
tweets = []

@app.route('/', methods=['GET', 'POST'])
def index():
	print("index: ", tweets)
	return render_template('index.html')


@app.route('/tweets', methods=['GET', 'POST'])
def tweet_feed():
	if request.method == 'POST':
		tweet = request.form['tweet']
		tweets.append(tweet)
	return render_template('tweet_feed.html', tweets=tweets)

# Mitigation
# @app.route('/tweets', methods=['GET', 'POST'])
# def tweet_feed():
# 	if request.method == 'POST':
# 		tweet = request.form['tweet']
# 		tweets.append(tweet)
# 	response = make_response(render_template('tweet_feed.html', tweets=tweets))
# 	response.headers['Content-Security-Policy'] = "default-src 'self'"
# 	return response

if __name__ == '__main__':
	app.run(host='127.0.0.1', port=5000, debug=True)