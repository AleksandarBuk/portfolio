from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/send_document', methods=['POST'])
def send_document():
    data = request.json  # Get JSON data from the request
    email = data.get('email')
    file_path = data.get('filePath')

    if email and email.strip() != "":
        # Sends the document
        return jsonify({"message": "Document sent successfully"}), 200
    else:
        return jsonify({"message": "Invalid email"}), 400


if __name__ == '__main__':
    app.run(port=5500)
