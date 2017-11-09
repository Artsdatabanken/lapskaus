import React, { Component } from 'react'
import PropTypes from 'prop-types'
import animationLoop from './animationLoop'

class Scatterplot extends Component {
  componentDidMount() {
    this.setProps(this.props)
//    window.setTimeout(()=>this.stopAnimation(), 5000);
  }

  stopAnimation() {
    animationLoop.stop();
  }

  componentWillReceiveProps(nextProps) {
    animationLoop.stop()
    this.setProps(nextProps)
    animationLoop.start({ canvas: 'map-canvas-scatter' })
  }

  setProps(nextProps) {
    animationLoop.taxonId = nextProps.taxonId
    animationLoop.filterMin = nextProps.filterMin
    animationLoop.filterMax = nextProps.filterMax
    animationLoop.alpha = nextProps.alpha

    // Reanimate
    animationLoop.start({ canvas: 'map-canvas-scatter' });
    window.setTimeout(()=>this.stopAnimation(), 5000);

  }

  componentWillUnmount() {
    animationLoop.stop()
  }

  render() {
    const {width, height} = this.props;
    return <div id={this.props.taxonId}>
        <canvas id="map-canvas-scatter" style={{width: width, height: height}}/>
      </div>
  }
}

Scatterplot.propTypes = {
  alpha: PropTypes.number,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  taxonId: PropTypes.number.isRequired
}

export default Scatterplot
