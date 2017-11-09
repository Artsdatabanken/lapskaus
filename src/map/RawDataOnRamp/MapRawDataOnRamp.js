import React, { Component } from 'react'
import PropTypes from 'prop-types'
import animationLoop from './animationLoop'

class MapRawDataOnRamp extends Component {
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
    animationLoop.start({ canvas: 'map-canvas' })
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
    const {width, height} = this.props
    return <div id={this.props.taxonId}>
        <canvas id="map-canvas" style={{width: width, height: height}}/>
      </div>
  }
}

MapRawDataOnRamp.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alpha: PropTypes.number,
  taxonId: PropTypes.number.isRequired
}

export default MapRawDataOnRamp
