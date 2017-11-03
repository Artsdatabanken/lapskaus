import {
  GL,
  AnimationLoop,
  loadTextures,
  ClipSpaceQuad,
  setParameters
} from 'luma.gl'
import ramp from './ramp_plasma.png'
import fragmentShader from './fragmentShader.glsl'

const animationLoop = new AnimationLoop({
  onInitialize({ gl }) {
    setParameters(gl, {
      depthTest: false,
      antialias: false
    })

    return loadTextures(gl, {
      urls: [
        'http://nodeyoda.westeurope.cloudapp.azure.com/map/gebco_skyggerelieff2.png',
        'http://nodeyoda.westeurope.cloudapp.azure.com/map/mosaic_dm_cut_1km.png',
        `http://nodeyoda.westeurope.cloudapp.azure.com/observation/${this.taxonId}.png`,
        ramp
      ]
    }).then(textures => ({
      square: new ClipSpaceQuad(gl, {
        fs: fragmentShader,
        uniforms: {
          uSamplerBaseMap: textures[0],
          uSamplerEnvironment: textures[1],
          uSamplerObservations: textures[2],
          uSamplerColorRamp: textures[3]
        }
      })
    }))
  },
  onRender({ gl, tick, square }) {
    console.log('nextprops',this.filterMin, this.filterMax)
    square.render({
      tick: tick,
      filterMin: this.filterMin,
      filterMax: this.filterMax,
      alpha: this.alpha
    })
  }
})

export default animationLoop
