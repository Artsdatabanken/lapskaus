import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back'
import ActionSearch from 'material-ui/svg-icons/action/search'
import TaxonSearch from '../TaxonSearch/TaxonSearch'

const styles = {
  title: {
    cursor: 'pointer'
  }
};

export default class AppBarEG extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <div>
          {this.state.showSearch ? (
              <TaxonSearch
                  onClick={this.handleSearchClick}
                  onAbort={this.handleSearchButtonClick}
                  onKeyDown={this.handleKeyDown}
              />
          ) : (
              <AppBar
                  title={<span style={styles.title}>Artstre</span>}
                  onTitleTouchTap={() => this.props.onClick(0)}
                  iconElementLeft={
                    <IconButton
                        onClick={() => this.props.onClick(1)} // todo: goto parent
                        >
                      <NavigationBack />
                    </IconButton>
                  }
                  iconElementRight={
                    <IconButton onClick={this.handleSearchButtonClick}>
                      <ActionSearch />
                    </IconButton>
                  }
              />
          )}
          </div>
    )
  }
}
