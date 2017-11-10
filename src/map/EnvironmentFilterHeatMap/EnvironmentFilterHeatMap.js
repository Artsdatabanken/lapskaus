import React, { Component } from 'react'
import PropTypes from 'prop-types'
import animationLoop from './animationLoop'

class EnvironmentFilterHeatMap extends Component {
  componentDidMount() {
    this.setProps(this.props)
    animationLoop.stop()
    animationLoop.start({ canvas: 'map-canvas-heatmap' })
    window.setTimeout(()=>this.stopAnimation(), 5000);
  }

  stopAnimation() {
    animationLoop.stop();
  }

  componentWillReceiveProps(nextProps) {
    this.setProps(nextProps)
  }

  setProps(nextProps) {
    animationLoop.taxonId = nextProps.taxonId
    animationLoop.filterMin = nextProps.filterMin
    animationLoop.filterMax = nextProps.filterMax
    animationLoop.alpha = nextProps.alpha

    // Reanimate
    animationLoop.start({ canvas: 'map-canvas-heatmap' });
    window.setTimeout(()=>this.stopAnimation(), 5000);

  }

  componentWillUnmount() {
    animationLoop.stop()
  }

  render() {
      const {width, height} = this.props;
      return  <div id={this.props.taxonId}>
        <canvas id="map-canvas-heatmap" style={{width: width + "px", height: height + "px"}}/>
      </div>
  }
}

EnvironmentFilterHeatMap.propTypes = {
  alpha: PropTypes.number,
  taxonId: PropTypes.number,
  filterMin: PropTypes.number,
  filterMax: PropTypes.number,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired}

export default EnvironmentFilterHeatMap
