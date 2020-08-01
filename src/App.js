import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/login.component';
import Auth from './components/auth-login.component';

function App() {
  return (
    <div>
    <Login/>
    <Auth/>
    </div>

  );
}

export default App;
