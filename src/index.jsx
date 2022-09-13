import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "aos/dist/aos.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer position="bottom-left" />
  </React.StrictMode>,
  document.getElementById('root')
);