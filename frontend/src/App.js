import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css';
import Home from './components/pages/Home';
import RegisterForm from './components/layout/RegisterForm';
import LoginForm from './components/layout/LoginForm';
import ProductForm from './components/layout/ProductForm';

function App() {
  const [setMessage] = useState('');

  useEffect(() => {
    fetch('/')
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error(`Error: ${error}`));
  })

  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/signup' Component={RegisterForm} />
        <Route exact path='/login' Component={LoginForm} />
        <Route exact path='/create-product' Component={ProductForm} />
      </Routes>
    </Router>
  );
};

export default App;
