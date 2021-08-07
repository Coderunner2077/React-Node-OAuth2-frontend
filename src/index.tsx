import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./AuthContext";

ReactDOM.render(
  <BrowserRouter>
    <AuthContext>
      <App />
    </AuthContext>    
  </BrowserRouter>,
  document.getElementById('root')
);
