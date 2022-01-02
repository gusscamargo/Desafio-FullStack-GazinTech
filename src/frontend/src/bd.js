import axios from "axios";

export default axios.create({
  baseURL: "http://127.0.0.1:4000",
  timeout: 1000,
  headers: {
    "Content-type": "application/json;charset=UTF-8"
  }

});