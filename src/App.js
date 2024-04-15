import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [activeDeals, setActiveDeals] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/api/get').then((data) => {
      setActiveDeals(data.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {activeDeals.map((deals) => {
            return (
              <li customer = {deals.customer}>
                <p>{deals.car_model}</p>
                <p>{deals.price}</p>
              </li>
            );
          })}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
