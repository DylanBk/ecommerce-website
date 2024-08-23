import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css';
import Home from './components/pages/Home';
import RegisterForm from './components/layout/RegisterForm';
import LoginForm from './components/layout/LoginForm';
import Product  from './components/pages/Product';
import CreateProduct from './components/pages/CreateProduct'


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
        {/* PUBLIC ROUTES */}
        <Route exact path='/' element={<Home />} />

        <Route exact path='/signup' element={<RegisterForm />} />
        <Route exact path='/login' element={<LoginForm />} />

        <Route exact path='/product' element={<Product />} />

        {/* PRIVATE ROUTES */}
        <Route exact path='/create-product' element={<CreateProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
