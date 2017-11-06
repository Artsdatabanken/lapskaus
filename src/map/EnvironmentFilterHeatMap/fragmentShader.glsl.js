const FRAGMENT_SHADER = `\
#ifdef GL_ES
precision highp float;
#endif

varying vec2 position;

uniform sampler2D uSamplerBaseMap;
uniform sampler2D uSamplerEnvironment;
uniform sampler2D uSamplerObservations;
uniform sampler2D uSamplerColorRamp;
uniform float filterMin, filterMax, tick, alpha;

const vec2 texDimensions = vec2(1237,1552);
const vec2 pixel = 1.0 / texDimensions;

float packColor(vec3 color) {
  return color.r + color.g * 256.0 + color.b * 256.0 * 256.0;
}

float sampleObservation(float x, float y) {
  float scale = 1.;//clamp(tick/40.0,0.0,1.0);
  vec3 rgb = texture2D(uSamplerObservations, vec2(x,y*scale)).rgb;
  return packColor(rgb);
}

float sampleObservations(float x, float y) {
  float m1 =   0.856996891435279;
  float count =
    sampleObservation(x, y)
    + m1*(sampleObservation(x - pixel.x, y)
    + m1*sampleObservation(x + pixel.x, y)
    + m1*sampleObservation(x, y + pixel.y)
    + m1*sampleObservation(x, y - pixel.y));

    m1 *= m1;
    count+= m1*(sampleObservation(x - 2.*pixel.x, y)
    + m1*sampleObservation(x + 2.*pixel.x, y)
    + m1*sampleObservation(x, y + 2.*pixel.y)
    + m1*sampleObservation(x, y - 2.*pixel.y));

    return log(0.00001 * count + 1.);
    return log(0.1008 * count + 1.);
  }


void main(void) {
  vec2 texCoord = position * 0.5 + 0.5;
  float scale = clamp(tick/40.0-0.05,0.0,1.0);
  float scale2 = clamp(tick/40.0-1.1,0.0,1.0);
  gl_FragColor.rgba = mix(vec4(1.,1.,1.,1.),texture2D(uSamplerBaseMap, texCoord),scale);

  float envValue = packColor(texture2D(uSamplerEnvironment, texCoord).rgb);
  float alphaEnv = step(envValue, filterMax) * step(filterMin, envValue);
  float observationFrequency = scale2*clamp(sampleObservations(texCoord.x, texCoord.y), 0., 0.999);
  float alpha1 =  smoothstep(observationFrequency, 0.0, 0.005) * alphaEnv * alpha;
  vec4 observationColor = texture2D(uSamplerColorRamp,
    vec2(clamp(observationFrequency,0.001,0.999), 0.5));
    gl_FragColor.rgb = mix(gl_FragColor.rgb, observationColor.rgb, alpha1);
      gl_FragColor.rgb *= 1.-alpha1*(1.-observationColor.rgb);
}
`
export default FRAGMENT_SHADER
