import React from "react";
import List, {
    ListItem,
    ListItemText,
    ListItemSecondaryAction
} from "material-ui-next/List";
import Avatar from "material-ui-next/Avatar";
import Chip from "material-ui-next/Chip";
import backend from "../backend";
import defaultImage from "../dna.jpg";
const addDefaultSrc = function(ev) {
    ev.target.src = defaultImage;
};

function TaxonTree(props) {
    return (
        <List>
            {props.items.length ? (
                props.items.map(item => (
                    <ListItem
                        button
                        key={item.id}
                        onClick={() => props.onClick(item.id)}
                    >
                        <Avatar
                            src={backend.getTaxonPhotoUrl(item.id)}
                            onError={addDefaultSrc}
                        />

                        <ListItemText
                            primary={item.scientificName}
                            secondary={item.popularName}
                        />
                        <ListItemSecondaryAction>
                            <Chip label={item.aggreggatedCount} />
                        </ListItemSecondaryAction>
                    </ListItem>
                ))
            ) : (
                <ListItem>
                    <ListItemText primary={"Ingen underarter"} />
                </ListItem>
            )}
        </List>
    );
}

export default TaxonTree;
