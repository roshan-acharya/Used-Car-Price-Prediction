import axios from "axios"

const instance = axios.create({
  baseURL: "https://used-car-price-prediction-7df1.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance