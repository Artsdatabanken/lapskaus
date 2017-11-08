import React, { Component } from 'react'
import AppBar from 'material-ui-next/AppBar'
import IconButton from 'material-ui-next/IconButton'
import NavigationUp from 'material-ui-icons/ArrowUpward'
import ActionSearch from 'material-ui-icons/Search'
import TaxonSearch from '../TaxonSearch/TaxonSearch'
import Toolbar from 'material-ui-next/Toolbar';
import Typography from 'material-ui-next/Typography';
import Button from 'material-ui-next/Button';
import { withStyles } from 'material-ui-next/styles';

const styles = theme => ({
    root: {
        marginTop: 0,
        width: '100%',
    },
    flex: {
        cursor: 'pointer',
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },

});

class AppBarEG extends Component {
  constructor(props) {
      super(props);
      this.state = {
          classes: props.classes,
          taxon: props.taxon,
          showSearch: false
      }
  }

  handleSearchButtonClick = () => {
    this.setState({ showSearch: !this.state.showSearch });
  };

  handleSearchClick = taxonId => {
      this.props.onClick(taxonId)
  };

  handleKeyDown = e => {
      if (e.keyCode === 27) {
          this.handleSearchButtonClick();
      }
  };

  render() {
    return (
      <div className={this.state.classes.root}>
          {this.state.showSearch ? (
              <TaxonSearch
                  onClick={this.handleSearchClick}
                  onAbort={this.handleSearchButtonClick}
                  onKeyDown={this.handleKeyDown}
              />
          ) : (
              <AppBar
                  position="static"
                  >
              <Toolbar>
                  {this.props.taxon.id ? (
              <IconButton
                  className={this.state.classes.menuButton}
                  color="contrast"
                  aria-label="Back"
                  onClick={() => this.props.onClick(this.props.taxon.parentId)}
                  >
              <NavigationUp/>
              </IconButton> ) : ""}
              <Typography
                  type="title"
                  color="inherit"
                  className={this.state.classes.flex}
                  onClick={() => this.props.onClick(0)}
                  >
              Artstre
              </Typography>
              <Button
                color="contrast"
                onClick={this.handleSearchButtonClick}
                >
              <ActionSearch />
              </Button>
              </Toolbar>
              </AppBar>
          )}
          </div>
    )
  }
}

export default withStyles(styles)(AppBarEG);