import {
  AnimationLoop,
  loadTextures,
  ClipSpaceQuad,
  setParameters
} from 'luma.gl'
import fragmentShader from './fragmentShader.glsl'

let pickPosition = [0, 0]
function mousemove(e) {
  pickPosition = [e.offsetX, e.offsetY]
}
function mouseleave(e) {
  pickPosition = null
}
const animationLoop = new AnimationLoop({
  onInitialize({ gl }) {
    gl.canvas.addEventListener('mousemove', mousemove)
    gl.canvas.addEventListener('mouseleave', mouseleave)
    return loadTextures(gl, {
      urls: [
        'http://nodeyoda.westeurope.cloudapp.azure.com/map/gebco_skyggerelieff2_grey.png',
        `http://nodeyoda.westeurope.cloudapp.azure.com/observation/${this
          .taxonId}.png`
      ],
      parameters: [
        {
          [gl.TEXTURE_MAG_FILTER]: gl.LINEAR,
          [gl.TEXTURE_MIN_FILTER]: gl.LINEAR,
          mipmap: false
        },
        {
          [gl.TEXTURE_MAG_FILTER]: gl.LINEAR,
          [gl.TEXTURE_MIN_FILTER]: gl.LINEAR,
          mipmap: false
        }
      ]
    }).then(textures => ({
      square: new ClipSpaceQuad(gl, {
        fs: fragmentShader,
        uniforms: {
          uSamplerBaseMap: textures[0],
          uSamplerObservations: textures[1]
        }
      })
    }))
  },
  onFinalize({ gl, square }) {
    //    square.delete();
  },
  onRender({ square }) {
    square.render({})
    this.stop()
  }
})

export default animationLoop
