from flask import Flask, request
from flask import request, make_response

app = Flask(__name__)


@app.route('/boot2', methods=['GET', 'POST'])
def index():
    print(request.data)
    return request.data

if __name__ == "__main__":
    app.run()
