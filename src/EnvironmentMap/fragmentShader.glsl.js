const FRAGMENT_SHADER = `\
#ifdef GL_ES
precision highp float;
#endif

varying vec2 position;

uniform sampler2D uSamplerBaseMap;
uniform sampler2D uSamplerEnvironment;
uniform sampler2D uSamplerObservations;
uniform sampler2D uSamplerColorRamp;
uniform float filterMin, filterMax, tick;

const vec2 texDimensions = vec2(1237,1552);
const vec2 pixel = 1.0 / texDimensions;
const float envMapScale = 1./2468.;

float packColor(vec3 color) {
  return color.r + color.g * 256.0 + color.b * 256.0 * 256.0;
}

float sampleObservation(float x, float y) {
  vec3 rgb = texture2D(uSamplerObservations, vec2(x,y)).rgb;
  return packColor(rgb);
}

float sampleObservations(float x, float y) {
  float m1 =   0.856996891435279;
  float m2 =  0.539407507237627;
  float m3 = 0.249352208777296;

  float count =
    sampleObservation(x, y)
    + m1 * (sampleObservation(x - pixel.x, y)
    + sampleObservation(x + pixel.x, y)
    + sampleObservation(x, y + pixel.y)
    + sampleObservation(x, y - pixel.y));
    return log(0.0008 * count + 1.);
}

void main(void) {
  vec2 texCoord = position * 0.5 + 0.5;
  gl_FragColor = vec4(1.+-0.8*texture2D(uSamplerBaseMap, texCoord).rgb, 1.0);
  float envValue = packColor(texture2D(uSamplerEnvironment, texCoord).rgb) * envMapScale;
  float alt = floor(envValue*7.)*1./7.;
  float alphaEnv = smoothstep(filterMax,filterMax*0.98, envValue)
     * smoothstep(filterMin-0.01, filterMin, envValue);
  float observationFrequency = clamp(tick*0.02, 0., 1.0)*
    clamp(0.2*sampleObservations(texCoord.x, texCoord.y), 0., 0.999);
  float alpha =  clamp(0.8 * sqrt(observationFrequency), 0.0, 0.85) * alphaEnv;
  vec4 observationColor = texture2D(uSamplerColorRamp, vec2(clamp(1.75*observationFrequency-0.8,0.001,0.999), 0.5));
  gl_FragColor.rgb = mix(gl_FragColor.rgb, observationColor.rgb, alpha);
}
`
export default FRAGMENT_SHADER
