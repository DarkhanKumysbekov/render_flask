from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template("index.html")

@app.route("/hoot")
def hello():
    data = ["asfdasdf sdf asdf",2,3,4,5,6]
    return data


if __name__ == "__main__":
    app.run(debug=True, use_debugger=True, use_reloader=True)