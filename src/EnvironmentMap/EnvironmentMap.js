import React, { Component } from 'react'
import PropTypes from 'prop-types'
import animationLoop from './animationLoop'

const envMapScale = 1/2468.;

class EnvironmentMap extends Component {
  componentDidMount() {
    const nextProps = this.props
    animationLoop.taxonId = nextProps.taxonId
    animationLoop.filterMin = nextProps.filterMin * envMapScale
    animationLoop.filterMax = nextProps.filterMax * envMapScale
    animationLoop.stop()
    animationLoop.start({ canvas: 'map-canvas' })
  }

  componentWillUnmount() {
    animationLoop.stop()
  }

  render() {
    return <canvas id="map-canvas" style={{width: '100%', height: '100%'}}/>
  }
}

EnvironmentMap.propTypes = {
  taxonId: PropTypes.number,
  filterMin: PropTypes.number,
  filterMax: PropTypes.number
}

export default EnvironmentMap
