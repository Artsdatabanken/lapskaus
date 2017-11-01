import React from 'react'
import AppBarEG from './AppBarEG';
import TaxonTree from './TaxonTree';
import TaxonCard from "./TaxonCard";

class TaxonList extends React.Component {
    constructor({ history, match }) {
        super();
        this.state={
            items:[]
        };
    }

    componentWillReceiveProps(nextProps) {
        this.goFetch(nextProps.match.params.taxon);
    }

    componentDidMount(){
        this.goFetch(this.props.match.params.taxon);
    }

    goFetch(taxonId) {
        fetch(`https://artskart.artsdatabanken.no/appapi/api/data/GetTaxonTree?parentTaxonId=${taxonId}`)
            .then(result=>result.json())
            .then(items=>this.setState({
                items: items
            }))
    }

    handleGoToTaxon(taxon) {
        this.props.history.push(`/taxon/${taxon}`);
    }

    render() {
        return (
            <div>
                <AppBarEG
                    onClick={(taxonParentId) => this.handleGoToTaxon(taxonParentId)}
                />
                <TaxonCard
                    taxonId={this.props.match.params.taxon}
                />
                <TaxonTree
                    items={this.state.items}
                    onClick={(taxonId) => this.handleGoToTaxon(taxonId)}
                />
            </div>
        )
    }
}

export default TaxonList;