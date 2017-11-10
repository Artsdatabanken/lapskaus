import React from 'react';
import Card, { CardContent, CardMedia } from 'material-ui-next/Card';
import PropTypes from 'prop-types';
import Typography from 'material-ui-next/Typography';
import { withStyles } from 'material-ui-next/styles';
import EnvironmentFilterHeatMap from "../map/EnvironmentFilterHeatMap/EnvironmentFilterHeatMap";
import Scatterplot from "../map/Scatterplot/Scatterplot"
import Heatmap from "../map/Heatmap/Heatmap"
import Tabs, { Tab } from 'material-ui-next/Tabs';
import Responsive from 'react-responsive';

//const Desktop = props => <Responsive {...props} minWidth={992} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
//const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Default = props => <Responsive {...props} minWidth={768} />;

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
        height: "1552px",
    },
};

class TaxonLocations extends React.Component {
    state = {
        value: 0,
        smallWidth: 412,
        fullWidth: 1237,
        smallHeight: 517,
        fullHeight: 1552,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes, taxonId} = this.props;
        const {value, smallWidth, fullWidth, smallHeight, fullHeight} = this.state;
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
                        <Tab label="Heat map 2" />
                    </Tabs>
                </CardContent>
                <Default>
                    <CardMedia
                        className={classes.media}
                        title="utbredelse"
                        src={"#"}
                    >
                        {value === 0 &&
                            <TabContainer>
                                <EnvironmentFilterHeatMap taxonId={Number(taxonId)} filterMin={0} filterMax={2000} alpha={0.5} width={fullWidth} height={fullHeight} />
                            </TabContainer>}
                        {value === 1 &&
                            <TabContainer>
                                <Scatterplot taxonId={Number(taxonId)} filterMin={0} filterMax={2000} alpha={0.5} width={fullWidth} height={fullHeight}/>
                            </TabContainer>}
                        {value === 2 &&
                            <TabContainer>
                                <Heatmap key={Number(taxonId)} taxonId={Number(taxonId)} width={fullWidth} height={fullHeight} amplifyFactor={500} />
                            </TabContainer>}
                    </CardMedia>
                </Default>
                <Mobile>
                    <CardMedia
                        className={classes.media}
                        title="utbredelse"
                        src={"#"}
                    >
                        {value === 0 &&
                        <TabContainer>
                            <EnvironmentFilterHeatMap taxonId={Number(taxonId)} filterMin={0} filterMax={2000} alpha={0.5} width={smallWidth} height={smallHeight} />
                        </TabContainer>}
                        {value === 1 &&
                        <TabContainer>
                            <Scatterplot taxonId={Number(taxonId)} filterMin={0} filterMax={2000} alpha={0.5} width={smallWidth} height={smallHeight}/>
                        </TabContainer>}
                        {value === 2 &&
                        <TabContainer>
                            <Heatmap key={Number(taxonId)} taxonId={Number(taxonId)} width={smallWidth} height={smallHeight} amplifyFactor={500} />
                        </TabContainer>}
                    </CardMedia>
                </Mobile>
            </Card>
        )
    }
}

TaxonLocations.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaxonLocations);


