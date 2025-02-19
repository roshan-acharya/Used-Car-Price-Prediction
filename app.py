from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pickle
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load the trained model
with open('car_price_model.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/')
def home():
    return "Car Price Prediction API is Running!"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        
        data = request.get_json()
        df = pd.DataFrame([data])
        prediction = model.predict(df)
        prediction = np.exp(prediction)
        return jsonify({'predicted_price': prediction[0]})
    
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
