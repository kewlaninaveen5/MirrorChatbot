import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
import Reducer from './store/Reducer';
import { createStore } from 'redux'; 
import { composeWithDevTools } from 'redux-devtools-extension';

const Store =  createStore(Reducer, composeWithDevTools());


const app = <Provider store={Store} >
  {/* <BrowserRouter> */}
<React.StrictMode>
  <App />
</React.StrictMode>
  {/* </BrowserRouter> */}
</Provider>

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
