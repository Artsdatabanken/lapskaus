import React, { Component } from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import getNext from '../componentid'
import backend from '../backend'

const dataSourceConfig = {
  text: 'ScientificName',
  value: 'Id'
}

export default class TaxonSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    }
  }


  handleSelection = (chosenRequest, index) => {
    this.props.onClick(chosenRequest.Id)
  }

  handleUpdateInput = searchStr => {
      backend.searchTaxons(searchStr)
      .then(items =>
        this.setState({
          dataSource: items
        })
      )
  };

  render() {
    return (
      <AutoComplete
          autoFocus
        id={getNext()}
        hintText="Søk på vitenskapelig navn"
        filter={AutoComplete.caseInsensitiveFilter}
        dataSource={this.state.dataSource}
        dataSourceConfig={dataSourceConfig}
        onUpdateInput={this.handleUpdateInput}
        onNewRequest={this.handleSelection}
        onKeyDown={this.props.onKeyDown}
        onClose={this.props.onAbort}
        floatingLabelText="Søk på takson"
        fullWidth={true}
      />
    )
  }
}
