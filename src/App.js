import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import TrainList from './Components/TrainList';

import MartaDashboard from './MartaDashboard';



class App extends React.Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
      </header>
          <MartaDashboard />
      </div>
    );
  }
}

export default App;
