import React from 'react';
import Card, { CardContent, CardMedia } from 'material-ui-next/Card';
import PropTypes from 'prop-types';
import Typography from 'material-ui-next/Typography';
import { withStyles } from 'material-ui-next/styles';
import EnvironmentFilterHeatMap from "../map/EnvironmentFilterHeatMap/EnvironmentFilterHeatMap";
import Scatterplot from "../map/Scatterplot/Scatterplot"
import Heatmap from "../map/Heatmap/Heatmap"
import Tabs, { Tab } from 'material-ui-next/Tabs';

function TabContainer(props) {
    return <div>{props.children}</div>;
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = {
    root: {
        flexGrow: 1,
        marginTop: 0,
    },
    card: {
        width: "100%",
    },
    media: {
        height: "750px",
    },
};

class TaxonLocations extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes, taxonId} = this.props;
        const {value} = this.state;
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography type="headline" component="h2">
                        Utbredelse
                    </Typography>
                    <Typography component="p">
                        basert på observasjoner
                    </Typography>
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Heat map 1" />
                        <Tab label="Scatter plot" />
                        <Tab label="More proper Heat map" />
                    </Tabs>
                </CardContent>
                <CardMedia
                    className={classes.media}
                    title="utbredelse"
                    src={"#"}
                >
                    {value === 0 && <TabContainer><EnvironmentFilterHeatMap taxonId={Number(taxonId)} filterMin={0} filterMax={2000} alpha={0.5} width={"100%"} height={"750px"} /></TabContainer>}
                    {value === 1 && <TabContainer><Scatterplot taxonId={Number(taxonId)} filterMin={0} filterMax={2000} alpha={0.5} width={"100%"} height={"750px"}/></TabContainer>}
                    {value === 2 && <TabContainer>
                        <Heatmap
                            key={Number(taxonId)}
                            taxonId={Number(taxonId)}
                            width={1237}
                            height={1552}
                            amplifyFactor={550}
                        />
                    </TabContainer>}




                </CardMedia>
            </Card>
        )
    }
}

TaxonLocations.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaxonLocations);


