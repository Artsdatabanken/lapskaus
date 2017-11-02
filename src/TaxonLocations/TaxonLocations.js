import React from 'react';
import {Card, CardHeader, CardMedia} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import backend from '../backend'

function TaxonLocations (props) {

    let url = backend.getTaxonLocationsUrl(props.taxonId);

    return (
        <MuiThemeProvider>
        <Card>
            <CardHeader
                title="Utbredelse (mock)"
                subtitle="basert på observasjoner"
            />
            <CardMedia>
                <img src={url} alt=""/>
            </CardMedia>

        </Card>
        </MuiThemeProvider>
    )
}

export default TaxonLocations;