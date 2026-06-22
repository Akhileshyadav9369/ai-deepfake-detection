from flask import Flask, render_template, request, jsonify
import random

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/detect", methods=["POST"])
def detect():

    if "image" not in request.files:
        return jsonify({
            "result": "ERROR",
            "confidence": 0
        })

    result = random.choice(["REAL", "FAKE"])

    confidence = round(random.uniform(85, 99), 2)

    return jsonify({
        "result": result,
        "confidence": confidence
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)