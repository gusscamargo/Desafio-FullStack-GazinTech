import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Redux e configuração
import {Provider as Redux} from "react-redux"
import configStore from "./store/store"
const store = configStore()

ReactDOM.render(
  <Redux store={store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Redux>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
