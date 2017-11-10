import React from 'react'
import Grid from 'material-ui-next/Grid';
import AppBarEG from '../AppBar/AppBarEG'
import TaxonTree from '../TaxonTree/TaxonTree'
import TaxonCard from '../TaxonCard/TaxonCard'
import TaxonLocations from "../TaxonLocations/TaxonLocations";
import backend from '../backend'
import Responsive from 'react-responsive';

//const Desktop = props => <Responsive {...props} minWidth={992} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
//const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Default = props => <Responsive {...props} minWidth={768} />;

const smallWidth = 412;
const fullWidth = 1237;
const smallHeight = 517;
const fullHeight = 1552;

class TaxonListContainer extends React.Component {
  state = {
      taxon: "",
      children: []
  };

  componentWillReceiveProps(nextProps) {
    this.goFetch(nextProps.match.params.taxon)
  }

  componentDidMount() {
    this.goFetch(this.props.match.params.taxon)
  }

  goFetch(taxonId) {
    backend.loadTaxonTree(taxonId)
    .then(data =>
      this.setState({
          taxon: data.taxonTreeNodes[0],
          children: data.taxonTreeNodes[0].children
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
              taxon={this.state.taxon}
              onClick={taxonParentId => this.handleGoToTaxon(taxonParentId)}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <TaxonCard taxon={this.state.taxon} />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <TaxonTree
              items={this.state.children}
              onClick={taxonId => this.handleGoToTaxon(taxonId)}
            />
          </Grid>
          <Grid item xs={12}>
              <Default>
                <TaxonLocations taxonId={this.props.match.params.taxon} width={fullWidth} height={fullHeight}/>
              </Default>
              <Mobile>
                  <TaxonLocations taxonId={this.props.match.params.taxon} width={smallWidth} height={smallHeight}/>
              </Mobile>
              />
          </Grid>
      </Grid>
    )
  }
}

export default TaxonListContainer
