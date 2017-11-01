import React from 'react'
import AppBarEG from './AppBarEG';
import TaxonTree from './TaxonTree';

class TaxonList extends React.Component {
    constructor({ history, match }) {
        super();
        this.state={
            items:[],
        };
    }

    componentWillReceiveProps(nextProps) {
        //console.log('componentWillReceiveProps');
        this.goFetch(nextProps.match.params.taxon);
    }

    componentDidMount(){
        //console.log('componentDidMount');
        this.goFetch(this.props.match.params.taxon);
    }

    goFetch(taxonId) {
        console.log('goFetch:' + taxonId);
        fetch(`https://artskart.artsdatabanken.no/appapi/api/data/GetTaxonTree?parentTaxonId=${taxonId}`)
            .then(result=>result.json())
            .then(items=>this.setState({items}))
    }

    handleGoToTaxon(taxonId) {
        this.props.history.push(`/taxon/${taxonId}`);
    }

    render() {
        return (
            <div>
                <AppBarEG/>
                <TaxonTree
                    items={this.state.items}
                    onClick={(taxonId) => this.handleGoToTaxon(taxonId)}
                />
            </div>
        )

    }
}

export default TaxonList;