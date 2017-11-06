import React from 'react';
import List, { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui-next/List';
import Avatar from 'material-ui-next/Avatar';
import FolderIcon from 'material-ui-icons/Folder'
import Chip from 'material-ui-next/Chip';

function TaxonTree (props) {
    return(
            <List>
                {props.items.length ?
                    props.items.map(item=>
                        <ListItem
                            button
                            key={item.Id}
                            onClick={() => props.onClick(item.Id)}
                        >
                            <Avatar>
                                <FolderIcon/>
                            </Avatar>
                            <ListItemText
                                primary={item.ScientificName}
                                secondary={item.PopularName}
                            />
                            <ListItemSecondaryAction>
                                <Chip
                                    label={item.CumulativeObservationCount}
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
                    )
                    : <ListItem>
                        <ListItemText
                            primary={"Loading..."}
                        />
                    </ListItem>
                }
            </List>
    )
}

 export default TaxonTree;