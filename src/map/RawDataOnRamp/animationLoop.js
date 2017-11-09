import {
  AnimationLoop,
  loadTextures,
  ClipSpaceQuad,
  setParameters
} from 'luma.gl'
import ramp from '../colorramp/ramp_plasma.png'
import fragmentShader from './fragmentShader.glsl'

const animationLoop = new AnimationLoop({
  onInitialize({ gl }) {
    setParameters(gl, {
      depthTest: false,
      antialias: false
    })
    return loadTextures(gl, {
      urls: [
        'http://nodeyoda.westeurope.cloudapp.azure.com/map/gebco_skyggerelieff2_grey.png',
        `http://nodeyoda.westeurope.cloudapp.azure.com/observation/${this.taxonId}.png`,
        ramp
      ],
    }).then(textures => ({
      square: new ClipSpaceQuad(gl, {
        fs: fragmentShader,
        uniforms: {
          uSamplerBaseMap: textures[0],
          uSamplerObservations: textures[1],
          uSamplerColorRamp: textures[2]
        }
      })
    }))
  },
  onRender({ gl, tick, square }) {
    square.render({})
    this.stop()
  }
})

export default animationLoop
