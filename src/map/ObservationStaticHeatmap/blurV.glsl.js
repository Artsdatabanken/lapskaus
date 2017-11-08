const FRAGMENT_SHADER = `\
#ifdef GL_ES
precision highp float;
#endif

varying vec2 position;

uniform sampler2D iChannel0;
uniform vec2 iResolution;

float SCurve (float x) {
	x = x * 2.0 - 1.0;
	return -x * abs(x) * 0.5 + x + 0.5;

    //return dot(vec3(-x, 2.0, 1.0 ),vec3(abs(x), x, 1.0)) * 0.5; // possibly faster version
}

vec4 BlurV (sampler2D source, vec2 size, vec2 uv, float radius) {
	if (radius >= 1.0)
	{
		vec4 A = vec4(0.0);
		vec4 C = vec4(0.0);
		float height = 1.0 / size.y;
		float divisor = 0.0;
        float weight = 0.0;
        float radiusMultiplier = 1.0 / radius;

        for (float y = -20.0; y <= 20.0; y++)
		{
			A = texture2D(source, uv + vec2(0.0, y * height));
           	weight = SCurve(1.0 - (abs(y) * radiusMultiplier));
           	C += A * weight;
			divisor += weight;
		}

		return vec4(C.r / divisor, C.g / divisor, C.b / divisor, 1.0);
	}

	return texture2D(source, uv);
}

void main()
{
    vec2 uv = position * 0.5 - 0.5;
    // Apply vertical blur to buffer A
	gl_FragColor = BlurV(iChannel0, iResolution.xy, uv, 20.0);
}
`
export default FRAGMENT_SHADER
