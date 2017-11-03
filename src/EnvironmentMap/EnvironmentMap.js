import React, { Component } from 'react'
import PropTypes from 'prop-types'
import animationLoop from './animationLoop'

class EnvironmentMap extends Component {
  componentDidMount() {
    const nextProps = this.props
    animationLoop.stop()
    animationLoop.start({ canvas: 'map-canvas' })
  }

  componentWillReceiveProps(nextProps) {
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

EnvironmentMap.propTypes = {
  alpha: PropTypes.number,
  taxonId: PropTypes.number,
  filterMin: PropTypes.number,
  filterMax: PropTypes.number
}

export default EnvironmentMap
