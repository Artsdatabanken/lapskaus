import React, { Component } from 'react'
import PropTypes from 'prop-types'
import animationLoop from './animationLoop'

class Heatmap extends Component {
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
    animationLoop.start({ canvas: 'map-canvas'})
  }

  setProps(nextProps) {
      animationLoop.taxonId = nextProps.taxonId
      animationLoop.width = nextProps.width
      animationLoop.height = nextProps.height
    animationLoop.filterMin = nextProps.filterMin
    animationLoop.filterMax = nextProps.filterMax
    animationLoop.alpha = nextProps.alpha
    animationLoop.amplifyFactor = nextProps.amplifyFactor || 1.0

    // Reanimate
    animationLoop.start({ canvas: 'map-canvas' });
    window.setTimeout(()=>this.stopAnimation(), 5000);

  }

  componentWillUnmount() {
    animationLoop.stop()
  }

  render() {
    const {width, height} = this.props
    return <div id={this.props.taxonId}>
        <canvas id="map-canvas" style={{width: width + "px", height: height + "px"}}/>
      </div>
  }
}

Heatmap.propTypes = {
  alpha: PropTypes.number,
  amplifyFactor: PropTypes.number,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  taxonId: PropTypes.number.isRequired
}

export default Heatmap
