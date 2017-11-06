import React, { Component } from 'react'
import PropTypes from 'prop-types'
import animationLoop from './animationLoop'

class EnvironmentFilterHeatMap extends Component {
  componentDidMount() {
    this.setProps(this.props)
    animationLoop.stop()
    animationLoop.start({ canvas: 'map-canvas' })
    window.setTimeout(()=>this.stopAnimation(), 5000);
  }

  stopAnimation() {
    animationLoop.stop();
    animationLoop._stopped=true
  }

  componentWillReceiveProps(nextProps) {
    this.setProps(nextProps)
  }

  setProps(nextProps) {
    animationLoop.taxonId = nextProps.taxonId
    animationLoop.filterMin = nextProps.filterMin
    animationLoop.filterMax = nextProps.filterMax
    animationLoop.alpha = nextProps.alpha
  }

  componentWillUnmount() {
    animationLoop.stop()
  }

  render() {
    return <canvas id="map-canvas" style={{width: '100%', height: '100%'}}/>
  }
}

EnvironmentFilterHeatMap.propTypes = {
  alpha: PropTypes.number,
  taxonId: PropTypes.number,
  filterMin: PropTypes.number,
  filterMax: PropTypes.number
}

export default EnvironmentFilterHeatMap
