import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';
import 'font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.css';
import Aos from 'aos';

const root = ReactDOM.createRoot(document.getElementById('root'));
Aos.init();
root.render(

  <BrowserRouter>
    <App />
  </BrowserRouter>
);

