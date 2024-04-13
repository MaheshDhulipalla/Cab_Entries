import logo from './logo.svg';
import './App.css';
// App.js
import React from 'react';
import FormComponent from './FormComponent';
import './styles.css'; // Import the CSS file

function App() {
  return (
    <div className="App">
      <h1>Cab Daily Entry</h1>
      <div className="form-container">
        <FormComponent />
      </div>
    </div>
  );
}

export default App;
