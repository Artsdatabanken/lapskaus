import {
  clear,
  AnimationLoop,
  Framebuffer,
  loadTextures,
  ClipSpaceQuad,
  setParameters
} from 'luma.gl'
import ramp from './ramp_plasma.png'
import fragmentShader from './fragmentShader.glsl'
import blurV from './blurV.glsl'
import blurH from './blurH.glsl'

const texWidth = 1237,
  texHeight = 1552

const animationLoop = new AnimationLoop({
  onInitialize({ gl }) {
    setParameters(gl, {
      depthTest: false,
      antialias: false
    })
    return loadTextures(gl, {
      urls: [
        'http://nodeyoda.westeurope.cloudapp.azure.com/map/gebco_skyggerelieff2_grey.png',
        `http://nodeyoda.westeurope.cloudapp.azure.com/observation/${this
          .taxonId}.png`,
        ramp
      ]
    }).then(textures => ({
      blurV: new ClipSpaceQuad(gl, {
        fs: blurV,
        uniforms: {
          iChannel0: textures[1]
        }
      }),
      blurH: new ClipSpaceQuad(gl, {
        fs: blurH
      }),
      square: new ClipSpaceQuad(gl, {
        fs: fragmentShader,
        uniforms: {
          uSamplerBaseMap: textures[0],
          uSamplerColorRamp: textures[2]
        }
      }),
      fbShadow: new Framebuffer(gl, {
        id: 'shadowmap',
        width: texWidth,
        height: texHeight
      }),
      fbShadow2: new Framebuffer(gl, {
        id: 'shadowmap2',
        width: texWidth,
        height: texHeight
      })
    }))
  },
  onRender({ gl, fbShadow, fbShadow2, blurH, blurV, square }) {
    gl.viewport(0, 0, texWidth, texHeight)
    clear(gl, { framebuffer: fbShadow, color: [0, 0, 0, 1], depth: false })

    blurV
      .setUniforms({
        iResolution: [texWidth, texHeight]
      })
      .draw({
        framebuffer: fbShadow
      })
    //    fbShadow.unbind()

    blurH
      .setUniforms({
        iResolution: [texWidth, texHeight],
        iChannel0: fbShadow.texture
      })
      .draw({
        framebuffer: fbShadow2
      })

    if (true)
      square
        .setUniforms({
          uSamplerObservations: fbShadow2.texture
        })
        .draw({})
  }
})

export default animationLoop
