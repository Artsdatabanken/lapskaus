import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import TaxonList from './TaxonList'

class App extends Component {

  render() {
    return (
      <div className="App">
          <BrowserRouter>
              <Route path="/taxon/:taxon" exact component={TaxonList} />
          </BrowserRouter>
      </div>
    );
  }
}

export default App;

