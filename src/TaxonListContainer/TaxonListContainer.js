import React from 'react'
import AppBarEG from '../AppBar/AppBarEG'
import TaxonTree from '../TaxonTree/TaxonTree'
import TaxonCard from '../TaxonCard/TaxonCard'
import backend from '../backend'

class TaxonListContainer extends React.Component {
  state = {
    items: []
  }

  componentWillReceiveProps(nextProps) {
    this.goFetch(nextProps.match.params.taxon)
  }

  componentDidMount() {
    this.goFetch(this.props.match.params.taxon)
  }

  goFetch(taxonId) {
    backend.loadTaxonTree(taxonId)
    .then(items =>
      this.setState({
        items: items
      })
    )
  }

  handleGoToTaxon(taxon) {
    this.props.history.push(`/taxon/${taxon}`)
  }

  render() {
    return (
      <div>
        <AppBarEG
          onClick={taxonParentId => this.handleGoToTaxon(taxonParentId)}
        />
        <TaxonCard taxonId={this.props.match.params.taxon} />
        <TaxonTree
          items={this.state.items}
          onClick={taxonId => this.handleGoToTaxon(taxonId)}
        />
      </div>
    )
  }
}

export default TaxonListContainer
