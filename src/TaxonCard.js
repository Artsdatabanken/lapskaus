import React from 'react';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function TaxonCard (props) {

    let url = `http://nodeyoda.westeurope.cloudapp.azure.com/taxonPhoto/${props.taxonId}.jpg`;

    return (
        <MuiThemeProvider>
        <Card>
            <CardMedia
                overlay={<CardTitle title="Vitenskapelig navn" subtitle="Populærnavn"/>}
            >
                <img src={url} alt=""/>
            </CardMedia>
            <CardActions>
                <FlatButton label="Action1"/>
                <FlatButton label="Action2"/>
            </CardActions>
        </Card>
        </MuiThemeProvider>
    )
}

export default TaxonCard;