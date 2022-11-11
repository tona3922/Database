import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import './styles/table.scss';
import App from './pages/app';
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

