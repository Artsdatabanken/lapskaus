import React, { Component } from 'react';
import './App.css';
import AppBarEG from './AppBarEG';
import TaxonTree from './TaxonTree';

class App extends Component {
    constructor() {
        super();
        this.state={items:[]};
    }

    componentDidMount(){
        fetch(`http://it-webadbtest01.it.ntnu.no/artskartwebapi2/api/data/GetTaxonTree?parentTaxonId=0`)
            .then(result=>result.json())
            .then(items=>this.setState({items}))
    }

  render() {
    return (
      <div className="App">
          <AppBarEG/>
          <TaxonTree
          items={this.state.items}/>
      </div>
    );
  }
}

export default App;

