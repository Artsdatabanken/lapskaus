import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import Chip from 'material-ui/Chip';

class TaxonTree extends Component {
    constructor() {
        super();
        this.state={items:[]};
    }
    componentDidMount(){
        fetch(`http://it-webadbtest01.it.ntnu.no/artskartwebapi2/api/data/GetTaxonTree?parentTaxonId=0`)
            .then(result=>result.json())
            .then(items=>this.setState({items}))
    }

    render() {
        return(
            <MuiThemeProvider>
                <List>
                    {this.state.items.length ?
                        this.state.items.map(item=>
                            <ListItem
                                key={item.Id}
                                leftAvatar={<Avatar icon={<FileFolder />} />}
                                rightIconButton={
                                    <Chip>
                                        {item.CumulativeObservationCount}
                                    </Chip>
                                }
                                primaryText={item.ScientificName}
                                secondaryText={item.PopularName}                            />
                        )
                        : <ListItem primaryText="Loading..." />
                    }
                </List>
            </MuiThemeProvider>
        )
    }
}

export default TaxonTree;