import React, { useEffect, useState } from 'react';
import './style.css';
import Header from './components/Header'

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/')
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error(`Error: ${error}`));
  })

  return (
    <div>
      {/* <p>{ message }</p> */}
      <Header />
    </div>
  );
};

export default App;
