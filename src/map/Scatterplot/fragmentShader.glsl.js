const FRAGMENT_SHADER = `\
#ifdef GL_ES
precision highp float;
#endif

varying vec2 position;

uniform sampler2D uSamplerBaseMap;
uniform sampler2D uSamplerObservations;

const vec2 texDimensions = vec2(1237,1552);
const vec2 pixel = 1.0 / texDimensions;

vec4 sampleObservationsBox1(vec2 xy) {
  float center = step(0.0001,texture2D(uSamplerObservations, xy).b);
  float px = pixel.x; float py=pixel.y;
  float border = 0.;
  const int size = 2;
  for(int dx=-size; dx <=size; dx++)
  for(int dy=-size; dy <=size; dy++) {
    vec2 uv = vec2(xy.x+float(dx)*px,xy.y+float(dy)*py);
    border += texture2D(uSamplerObservations, uv).b;
  }
  border -= texture2D(uSamplerObservations, xy).b;
  border = step(0.0001, border);
  return vec4(
    vec3(0.,0.,0.) * border +
    vec3(0.8,0.8,0.5) * step(border,center),
    border+center);
}

vec4 sampleObservations(vec2 xy) {
  float center = texture2D(uSamplerObservations, xy).b;
  float border = 0.;
  const int size = 1;
  for(int dx=0; dx <=size; dx++)
  for(int dy=0; dy <=size; dy++) {
    vec2 uv = pixel * vec2(
      (0.5 + float(dx)),
      (0.5 + float(dy)));
      vec2 uv2 = pixel * vec2(
          (0.5 + float(dx)),
        -(0.5 + float(dy)));
      float weight = length(uv);
    weight *= weight;
    border += texture2D(uSamplerObservations, xy+uv).b / weight;
    border += texture2D(uSamplerObservations, xy-uv).b / weight;
    border += texture2D(uSamplerObservations, xy+uv2).b / weight;
    border += texture2D(uSamplerObservations, xy-uv2).b / weight;
  }
  return vec4(
//    vec3(0.,0.,0.) * step(0.1, border) +
    vec3(0.8,0.8,0.5) * step(0.00001,center),
    border+center);
}

void main(void) {
  vec2 texCoord = position * 0.5 + 0.5;
  vec3 basemapColor = texture2D(uSamplerBaseMap, texCoord).rgb;
  vec4 obsColor = sampleObservationsBox1(texCoord);
  gl_FragColor = mix(vec4(basemapColor,1.), obsColor, obsColor.a);
}
`
export default FRAGMENT_SHADER
