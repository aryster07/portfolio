import { useRef, useEffect, type CSSProperties, type ReactNode, type MouseEventHandler } from 'react'
import { Renderer, Program, Mesh, Triangle, Color } from 'ogl'

interface SpecularButtonProps {
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
  className?: string
  'aria-label': string
}

const PAD = 20
const RADIUS = 999
const PROXIMITY = 250

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const FRAG = `#version 300 es
precision highp float;

uniform vec2 uCenter;
uniform vec2 uHalfSize;
uniform float uRadius;
uniform float uAngle;
uniform float uPx;
uniform vec3 uLineColor;
uniform vec3 uBaseColor;
uniform float uIntensity;
uniform float uShineSize;
uniform float uShineFade;
uniform float uThickness;
uniform float uBaseWidth;

out vec4 fragColor;

float sdRoundedRect(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

float shapeSDF(vec2 p) { return sdRoundedRect(p, uHalfSize, uRadius); }

float gaussianLine(float d, float sigma) {
  float x = d / (sigma + 1e-6);
  float k = mix(1.0, 1.6, smoothstep(0.0, 1.5, x));
  return exp(-k * x * x);
}

void main() {
  vec2 p = gl_FragCoord.xy - uCenter;
  float d = shapeSDF(p);
  vec2 L = vec2(cos(uAngle), sin(uAngle));

  // Dark base stroke hugging the edge for a sense of thickness
  float base = (1.0 - smoothstep(0.0, uBaseWidth, abs(d))) * 0.45;

  // Symmetric specular: the edges facing toward/away from the light both
  // catch a streak. The angular window (size + fade) is measured with an
  // elliptical normal so it varies continuously along straight edges.
  vec2 nEll = normalize(p / (uHalfSize * uHalfSize) + 1e-6);
  float phi = acos(clamp(abs(dot(nEll, L)), 0.0, 1.0));
  float rim = 1.0 - smoothstep(uShineSize - uShineFade, uShineSize + uShineFade + 1e-4, phi);
  float line = gaussianLine(d, uThickness);
  float edgeClamp = 1.0 - smoothstep(0.5 * uPx, 3.0 * uPx, abs(d));
  float hi = line * rim * edgeClamp * uIntensity;

  vec3 col = uBaseColor * base + uLineColor * hi;
  float a = clamp(base + hi, 0.0, 1.0);
  fragColor = vec4(col, a);
}
`

/**
 * SpecularButton (React Bits) — a WebGL specular highlight traces the button's
 * edge and steers toward the cursor.
 *
 * Two changes from the upstream source:
 *  1. WebGL setup is wrapped in try/catch. The shaders are `#version 300 es`,
 *     so they need WebGL2; without the guard, a WebGL1-only or
 *     context-limited browser throws during render and takes the page with it.
 *     Now it degrades to a plain styled button.
 *  2. The render loop pauses when the button scrolls out of view. Upstream runs
 *     a 60fps loop for the lifetime of the page even when nothing is visible.
 */
const SpecularButton = ({
  children,
  onClick,
  className = '',
  'aria-label': ariaLabel,
}: SpecularButtonProps) => {
  const btnRef = useRef<HTMLButtonElement>(null)
  const fxRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const btn = btnRef.current
    const fx = fxRef.current
    if (!btn || !fx) return

    const dpr = window.devicePixelRatio || 1

    let renderer: Renderer
    let program: Program
    let mesh: Mesh
    try {
      renderer = new Renderer({ alpha: true, premultipliedAlpha: true, antialias: true, dpr })
      const gl = renderer.gl
      gl.clearColor(0, 0, 0, 0)
      gl.enable(gl.BLEND)
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)

      const geometry = new Triangle(gl)
      if (geometry.attributes.uv) delete geometry.attributes.uv

      program = new Program(gl, {
        vertex: VERT,
        fragment: FRAG,
        uniforms: {
          uCenter: { value: [0, 0] },
          uHalfSize: { value: [1, 1] },
          uRadius: { value: 0 },
          uAngle: { value: 2.4 },
          uPx: { value: dpr },
          uLineColor: { value: [1, 1, 1] },
          uBaseColor: { value: [0.32, 0.32, 0.32] },
          uIntensity: { value: 1 },
          uShineSize: { value: 0.17 },
          uShineFade: { value: 0.7 },
          uThickness: { value: 1 },
          uBaseWidth: { value: dpr },
        },
      })

      mesh = new Mesh(gl, { geometry, program })
      fx.appendChild(gl.canvas)
    } catch {
      // No WebGL2 — the button still works, just without the highlight.
      return
    }

    const gl = renderer.gl

    const resize = () => {
      // Fractional size + explicit center keep the SDF pinned to the exact
      // CSS border, instead of drifting up to a pixel from offsetWidth rounding.
      const rect = btn.getBoundingClientRect()
      const w = rect.width
      const h = rect.height
      renderer.setSize(w + PAD * 2, h + PAD * 2)
      program.uniforms.uCenter.value = [(PAD + w / 2) * dpr, (PAD + h / 2) * dpr]
      program.uniforms.uHalfSize.value = [(w / 2) * dpr, (h / 2) * dpr]
      program.uniforms.uRadius.value = Math.min(RADIUS, Math.min(w, h) / 2) * dpr
    }
    const ro = new ResizeObserver(resize)
    ro.observe(btn)
    resize()

    // Light angle steers toward the pointer anywhere on the page.
    let pointerAngle: number | null = null
    let proximityT = 0
    const onPointerMove = (e: PointerEvent) => {
      const rect = btn.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = Math.max(rect.left - e.clientX, 0, e.clientX - rect.right)
      const dy = Math.max(rect.top - e.clientY, 0, e.clientY - rect.bottom)
      const dist = Math.hypot(dx, dy)
      // Over the button itself the light settles on the diagonal (framing the
      // corners) and gently sways with the cursor position within the button.
      if (dist === 0) {
        const nx = (e.clientX - cx) / (rect.width / 2)
        const ny = (cy - e.clientY) / (rect.height / 2)
        pointerAngle = Math.atan2(2 / rect.height, -2 / rect.width) + nx * 0.3 + ny * 0.15
      } else {
        pointerAngle = Math.atan2(cy - e.clientY, e.clientX - cx)
      }
      const t = Math.max(0, 1 - dist / PROXIMITY)
      proximityT = t * t * (3 - 2 * t)
    }
    window.addEventListener('pointermove', onPointerMove)

    let angle = 2.4
    let bright = 0
    let last = performance.now()
    let raf = 0
    let visible = true

    const lineC = new Color()
    const baseC = new Color()
    lineC.set('#ffffff')
    baseC.set('#525252')
    program.uniforms.uLineColor.value = [lineC.r, lineC.g, lineC.b]
    program.uniforms.uBaseColor.value = [baseC.r, baseC.g, baseC.b]
    program.uniforms.uShineSize.value = (10 * Math.PI) / 180
    program.uniforms.uShineFade.value = (40 * Math.PI) / 180
    program.uniforms.uThickness.value = dpr

    const update = (now: number) => {
      raf = requestAnimationFrame(update)
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      const target = pointerAngle ?? angle
      const diff = ((target - angle + Math.PI * 3) % (Math.PI * 2)) - Math.PI
      angle += diff * (1 - Math.exp(-dt * 7))

      bright += (proximityT - bright) * (1 - Math.exp(-dt * 8))

      program.uniforms.uAngle.value = angle
      program.uniforms.uIntensity.value = bright
      renderer.render({ scene: mesh })
    }
    raf = requestAnimationFrame(update)

    // Don't burn frames on a button nobody can see.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          visible = true
          last = performance.now()
          raf = requestAnimationFrame(update)
        } else if (!entry.isIntersecting && visible) {
          visible = false
          cancelAnimationFrame(raf)
        }
      },
      { rootMargin: '100px' },
    )
    io.observe(btn)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      if (gl.canvas.parentNode === fx) fx.removeChild(gl.canvas)
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [])

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`relative m-0 inline-flex cursor-pointer items-center justify-center border-none px-10 py-[18px] text-[1.15rem] font-medium leading-none tracking-[0.01em] outline-none transition-transform duration-150 active:scale-[0.97] [color:var(--sb-text-color)] [border-radius:var(--sb-radius)] [background:color-mix(in_srgb,var(--sb-tint)_calc(var(--sb-tint-opacity)*100%),transparent)] shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_8px_24px_rgba(0,0,0,0.25)] focus-visible:outline-2 focus-visible:outline-offset-[3px] ${className}`}
      style={
        {
          '--sb-radius': `${RADIUS}px`,
          '--sb-tint': '#ffffff',
          '--sb-tint-opacity': 0.04,
          '--sb-text-color': '#D7E2EA',
        } as CSSProperties
      }
    >
      <span
        ref={fxRef}
        aria-hidden="true"
        className="pointer-events-none absolute -inset-5 z-[1] [&_canvas]:block [&_canvas]:h-full [&_canvas]:w-full"
      />
      <span className="relative z-[2]">{children}</span>
    </button>
  )
}

export default SpecularButton
