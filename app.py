from flask import Flask, request, jsonify
import pickle
import pandas as pd

app = Flask(__name__)

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
        print(df)
        prediction = model.predict(df)
        return jsonify({'predicted_price': prediction[0]})
    
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
