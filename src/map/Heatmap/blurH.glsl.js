const FRAGMENT_SHADER = `\
#ifdef GL_ES
precision highp float;
#endif

varying vec2 position;

uniform sampler2D iChannel0;
uniform vec2 iResolution;

float SCurve (float x) {
    // ---- by CeeJayDK
		x = x * 2.0 - 1.0;
		return -x * abs(x) * 0.5 + x + 0.5;
        //return dot(vec3(-x, 2.0, 1.0 ),vec3(abs(x), x, 1.0)) * 0.5; // possibly faster version

    // ---- original for posterity

    // How to do this without if-then-else?
    // +edited the too steep curve value

    // if (value < 0.5)
    // {
    //    return value * value * 2.0;
    // }

    // else
    // {
    // 	value -= 1.0;

    // 	return 1.0 - value * value * 2.0;
    // }
}

vec4 BlurH (sampler2D source, vec2 size, vec2 uv, float radius) {
	if (radius >= 1.0)
	{
		vec4 A = vec4(0.0);
		vec4 C = vec4(0.0);

		float width = 1.0 / size.x;

		float divisor = 0.0;
        float weight = 0.0;

        float radiusMultiplier = 1.0 / radius;

        // Hardcoded for radius 20 (normally we input the radius
        // in there), needs to be literal here
		for (float x = -8.0; x <= 8.0; x++)
		{
			A = texture2D(source, uv + vec2(x * width, 0.0));
            weight = SCurve(1.0 - (abs(x) * radiusMultiplier));
            C += A * weight;
			divisor += weight;
		}

		return vec4(C.r / divisor, C.g / divisor, C.b / divisor, 1.0);
	}

	return texture2D(source, uv);
}

void main()
{
    vec2 uv = position*0.5+0.5;
    // Apply horizontal blur to final output
    gl_FragColor = BlurH(iChannel0, iResolution.xy, uv, 8.0);
}
`
export default FRAGMENT_SHADER
