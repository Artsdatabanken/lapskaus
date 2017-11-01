import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getNext from './componentid'

const dataSourceConfig = {
    text: 'ScientificName',
    value: 'Id',
};

export default class TaxonSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
        };
    }

    handleSelection = (chosenRequest, index) => {
        this.props.onClick(chosenRequest.Id);
    };

    handleUpdateInput = (searchStr) => {
        fetch(`https://artskart.artsdatabanken.no/appapi/api/data/SearchTaxons?maxCount=15&name=${searchStr}`)
            .then(result=>result.json())
            .then(items=>this.setState({
                dataSource: items
            }))
    };

    render() {
        return (
            <MuiThemeProvider>
                <AutoComplete
                    id={getNext()}
                    hintText="Søk på vitenskapelig navn"
                    dataSource={this.state.dataSource}
                    dataSourceConfig={dataSourceConfig}
                    onUpdateInput={this.handleUpdateInput}
                    onNewRequest={this.handleSelection}
                    floatingLabelText="Søk på takson"
                    fullWidth={true}
                />
            </MuiThemeProvider>
        );
    }
}