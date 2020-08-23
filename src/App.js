import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    window.location.replace("https://www.lift-church.com");
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
