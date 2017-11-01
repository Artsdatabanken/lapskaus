import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import TaxonList from './TaxonList'
import {resetComponentIds} from './componentid'

class App extends Component {
  render() {
    resetComponentIds()
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

