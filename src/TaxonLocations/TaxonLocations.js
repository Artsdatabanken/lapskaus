import React from 'react';
import Card, { CardContent, CardMedia } from 'material-ui-next/Card';
import PropTypes from 'prop-types';
import Typography from 'material-ui-next/Typography';
import { withStyles } from 'material-ui-next/styles';
//import backend from '../backend'
import EnvironmentFilterHeatMap from "../map/EnvironmentFilterHeatMap/EnvironmentFilterHeatMap";

const styles = {
    card: {
        width: "100%",
    },
    media: {
        height: "750px",
    },
};


function TaxonLocations (props) {
    const { classes } = props;

    //let url = backend.getTaxonLocationsUrl(props.taxonId);

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography type="headline" component="h2">
                    Utbredelse (mock)
                </Typography>
                <Typography component="p">
                    basert på observasjoner..
                </Typography>
            </CardContent>
            <CardMedia
                className={classes.media}
                title="utbredelse"
                src={"#"}
            >
                <EnvironmentFilterHeatMap
                    taxonId={Number(props.taxonId)} filterMin={0} filterMax={2000} alpha={0.5} />
            </CardMedia>
        </Card>
    )
}

TaxonLocations.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaxonLocations);