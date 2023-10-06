import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [trains, setTrains] = useState([]);
  const [selectedTrain, setSelectedTrain] = useState(null);

  useEffect(() => {
    // Fetch all trains from your backend API
    axios.get('http://20.244.56.144/train/trains/2344')
      .then(response => {
        setTrains(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch train data:', error);
      });
  }, []);

  const handleTrainClick = (train) => {
    setSelectedTrain(train);
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Train Schedule</h1>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">All Trains</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Route exact path="/" render={() => (
            <div>
              <h2>All Trains</h2>
              <ul>
                {trains.map(train => (
                  <li key={train.trainNumber}>
                    <button onClick={() => handleTrainClick(train)}>
                      {train.trainName}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )} />
          <Route path="/train/:trainNumber" render={() => (
            <div>
              {selectedTrain && (
                <div>
                  <h2>Train Details</h2>
                  <p>Train Name: {selectedTrain.trainName}</p>
                  <p>Train Number: {selectedTrain.trainNumber}</p>
                  <p>Departure Time: {selectedTrain.departureTime}</p>
                  <p>Seats Available (Sleeper): {selectedTrain.seatsAvailable.sleeper}</p>
                  <p>Seats Available (AC): {selectedTrain.seatsAvailable.AC}</p>
                  <p>Price (Sleeper): {selectedTrain.price.sleeper}</p>
                  <p>Price (AC): {selectedTrain.price.AC}</p>
                  <p>Delayed By: {selectedTrain.delayedBy}</p>
                </div>
              )}
            </div>
          )} />
        </main>
      </div>
    </Router>
  );
}

export default App;
