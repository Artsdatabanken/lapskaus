import React, { Component } from 'react'
import PropTypes from 'prop-types'
import animationLoop from './animationLoop'

class ObservationStaticHeatmap extends Component {
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
    animationLoop.amplifyFactor = nextProps.amplifyFactor || 1.
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

ObservationStaticHeatmap.propTypes = {
  alpha: PropTypes.number,
  taxonId: PropTypes.number
}

export default ObservationStaticHeatmap
