const FRAGMENT_SHADER = `\
#ifdef GL_ES
precision highp float;
#endif

varying vec2 position;

uniform sampler2D uSamplerBaseMap;
uniform sampler2D uSamplerObservations;
uniform sampler2D uSamplerColorRamp;

float sampleObservations(vec2 xy) {
  vec4 c = texture2D(uSamplerObservations, xy);
  float count = c.r*10.;
  return count;
}

void main(void) {
  vec2 texCoord = position * 0.5 + 0.5;
  vec3 basemapColor = texture2D(uSamplerBaseMap, texCoord).rgb;
  float observationFrequency = sampleObservations(texCoord);
  float alpha = smoothstep(observationFrequency, 0.0, 0.03);
  vec2 rampUv = vec2(clamp(observationFrequency,0.001,0.999), 0.5);
  vec3 observationColor = texture2D(uSamplerColorRamp, rampUv).rgb;

  gl_FragColor += vec4(basemapColor * (1.0 - alpha * (1.0-observationColor)),1.);
}
`
export default FRAGMENT_SHADER
