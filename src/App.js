import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import TaxonList from './TaxonListContainer/TaxonListContainer'
import {resetComponentIds} from './componentid'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css'

class App extends Component {
  render() {
    resetComponentIds()
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/taxon/:taxon" exact component={TaxonList} />
            <Route component={RedirectToDefault}/>
          </Switch>
        </BrowserRouter>
        </MuiThemeProvider>
    )
  }
}

const RedirectToDefault = () => <Redirect from="/" to="/taxon/0" />

export default App
