import React from 'react'
import Grid from 'material-ui-next/Grid';
import AppBarEG from '../AppBar/AppBarEG'
import TaxonTree from '../TaxonTree/TaxonTree'
import TaxonCard from '../TaxonCard/TaxonCard'
import TaxonLocations from "../TaxonLocations/TaxonLocations";
import backend from '../backend'
// import EnvironmentMap from "../EnvironmentMap/EnvironmentMap";

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
      <Grid container spacing={0}>
          <Grid item xs={12}>
            <AppBarEG
              onClick={taxonParentId => this.handleGoToTaxon(taxonParentId)}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <TaxonCard taxonId={this.props.match.params.taxon} />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <TaxonTree
              items={this.state.items}
              onClick={taxonId => this.handleGoToTaxon(taxonId)}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
              <TaxonLocations
                  taxonId={this.props.match.params.taxon}
              />
          </Grid>
          {/*<Grid item xs={12} sm={6} lg={4} xl={3}>*/}
              {/*<EnvironmentMap*/}
                  {/*taxonId={this.props.match.params.taxon} filterMin={400} filterMax={20000} alpha={0.5} />*/}

          {/*</Grid>*/}
      </Grid>
    )
  }
}

export default TaxonListContainer
