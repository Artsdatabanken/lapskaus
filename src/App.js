import React, { Component } from 'react';
import './App.css';
import AppBarEG from './AppBarEG';
import TaxonTree from './TaxonTree';

class App extends Component {
  render() {
    return (
      <div className="App">
          <AppBarEG/>
          <TaxonTree/>
      </div>
    );
  }
}

export default App;

