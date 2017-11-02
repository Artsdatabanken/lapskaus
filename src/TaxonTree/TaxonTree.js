import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import Chip from 'material-ui/Chip';

function TaxonTree (props) {
    return(
            <List>
                {props.items.length ?
                    props.items.map(item=>
                        <ListItem
                            key={item.Id}
                            leftAvatar={<Avatar icon={<FileFolder />} />}
                            rightIconButton={
                                <Chip>
                                    {item.CumulativeObservationCount}
                                </Chip>
                            }
                            primaryText={item.ScientificName}
                            secondaryText={item.PopularName}
                            onClick={() => props.onClick(item.Id)}
                        />
                    )
                    : <ListItem primaryText="Loading..." />
                }
            </List>
    )
}

 export default TaxonTree;