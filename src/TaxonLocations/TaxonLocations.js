import React from 'react';
import {Card, CardHeader, CardMedia} from 'material-ui/Card';
import backend from '../backend'

function TaxonLocations (props) {

    let url = backend.getTaxonLocationsUrl(props.taxonId);

    return (
        <Card>
            <CardHeader
                title="Utbredelse (mock)"
                subtitle="basert på observasjoner"
            />
            <CardMedia>
                <img src={url} alt=""/>
            </CardMedia>

        </Card>
    )
}

export default TaxonLocations;