import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import TaxonList from './TaxonList'
import {resetComponentIds} from './componentid'

class App extends Component {
  render() {
    resetComponentIds()
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/taxon/:taxon" exact component={TaxonList} />
            <Route component={RedirectToDefault}/>
          </Switch>
        </BrowserRouter>
    )
  }
}

const RedirectToDefault = () => <Redirect from="/" to="/taxon/0" />


export default App
