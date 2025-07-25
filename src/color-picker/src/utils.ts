import {
  hsl2hsv,
  hsl2rgb,
  hsla,
  type HSLA,
  hsv2hsl,
  hsv2rgb,
  hsva,
  type RGB,
  rgb2hsl,
  rgb2hsv,
  rgba,
  toHexaString,
  toHslaString,
  toHsvaString,
  toRgbaString
} from 'seemly'
import { warn } from '../../_utils'

export type ColorPickerMode = 'rgb' | 'hsl' | 'hsv' | 'hex'

export type ActionType = 'confirm' | 'clear'

export function deriveDefaultValue(
  modes: ColorPickerMode[],
  showAlpha: boolean
): string {
  const mode = modes[0]
  switch (mode) {
    case 'hex':
      return showAlpha ? '#000000FF' : '#000000'
    case 'rgb':
      return showAlpha ? 'rgba(0, 0, 0, 1)' : 'rgb(0, 0, 0)'
    case 'hsl':
      return showAlpha ? 'hsla(0, 0%, 0%, 1)' : 'hsl(0, 0%, 0%)'
    case 'hsv':
      return showAlpha ? 'hsva(0, 0%, 0%, 1)' : 'hsv(0, 0%, 0%)'
  }
  if (__DEV__)
    warn('color-picker', 'props.modes is invalid.')
  // in case of invalid modes
  return '#000000'
}

export function getModeFromValue(color: string | null): ColorPickerMode | null {
  if (color === null)
    return null
  if (/^ *#/.test(color))
    return 'hex'
  if (color.includes('rgb'))
    return 'rgb'
  if (color.includes('hsl'))
    return 'hsl'
  if (color.includes('hsv'))
    return 'hsv'
  return null
}

export function getWCAGContrast(
  hsla: HSLA,
  contrastColor: RGB = [255, 255, 255],
  level: 'AA' | 'AAA' = 'AA'
): boolean {
  const [r, g, b, a] = rgba(toHslaString(hsla))

  if (a === 1) {
    const luminance1 = rgb2luminance([r, g, b])
    const luminance2 = rgb2luminance(contrastColor)
    const contrast
      = (Math.max(luminance1, luminance2) + 0.05)
        / (Math.min(luminance1, luminance2) + 0.05)
    return contrast >= (level === 'AA' ? 4.5 : 7)
  }

  const blendedR = Math.round(r * a + contrastColor[0] * (1 - a))
  const blendedG = Math.round(g * a + contrastColor[1] * (1 - a))
  const blendedB = Math.round(b * a + contrastColor[2] * (1 - a))

  const luminanceBlended = rgb2luminance([blendedR, blendedG, blendedB])
  const luminanceWhite = rgb2luminance(contrastColor)
  const contrastBlended
    = (Math.max(luminanceBlended, luminanceWhite) + 0.05)
      / (Math.min(luminanceBlended, luminanceWhite) + 0.05)

  return contrastBlended >= (level === 'AA' ? 4.5 : 7)
}

function rgb2luminance(rgb: RGB): number {
  const [cr, cg, cb] = rgb.map((c) => {
    c /= 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * cr + 0.7152 * cg + 0.0722 * cb
}

export function floor(color: number[]): number[] {
  return color.map(channel => Math.floor(channel))
}

export function normalizeHue(hue: number): number {
  hue = Math.round(hue)
  return hue >= 360 ? 359 : hue < 0 ? 0 : hue
}

export function normalizeAlpha(alpha: number): number {
  alpha = Math.round(alpha * 100) / 100
  return alpha > 1 ? 1 : alpha < 0 ? 0 : alpha
}

const convert = {
  rgb: {
    hex(value: string): string {
      return toHexaString(rgba(value))
    },
    hsl(value: string): string {
      const [r, g, b, a] = rgba(value)
      return toHslaString([...rgb2hsl(r, g, b), a])
    },
    hsv(value: string): string {
      const [r, g, b, a] = rgba(value)
      return toHsvaString([...rgb2hsv(r, g, b), a])
    }
  },
  hex: {
    rgb(value: string): string {
      return toRgbaString(rgba(value))
    },
    hsl(value: string): string {
      const [r, g, b, a] = rgba(value)
      return toHslaString([...rgb2hsl(r, g, b), a])
    },
    hsv(value: string): string {
      const [r, g, b, a] = rgba(value)
      return toHsvaString([...rgb2hsv(r, g, b), a])
    }
  },
  hsl: {
    hex(value: string): string {
      const [h, s, l, a] = hsla(value)
      return toHexaString([...hsl2rgb(h, s, l), a])
    },
    rgb(value: string): string {
      const [h, s, l, a] = hsla(value)
      return toRgbaString([...hsl2rgb(h, s, l), a])
    },
    hsv(value: string): string {
      const [h, s, l, a] = hsla(value)
      return toHsvaString([...hsl2hsv(h, s, l), a])
    }
  },
  hsv: {
    hex(value: string): string {
      const [h, s, v, a] = hsva(value)
      return toHexaString([...hsv2rgb(h, s, v), a])
    },
    rgb(value: string) {
      const [h, s, v, a] = hsva(value)
      return toRgbaString([...hsv2rgb(h, s, v), a])
    },
    hsl(value: string): string {
      const [h, s, v, a] = hsva(value)
      return toHslaString([...hsv2hsl(h, s, v), a])
    }
  }
} as const

/**
 * Convert color value by mode
 */
// overload 1: known type of color conversion
// we have built-in color conversion
// return value can be determined as `string`
export function convertColor(
  value: string,
  mode: ColorPickerMode,
  originalMode: ColorPickerMode
): string
// overload 2: unknown type of color conversion
// the color value may be invalid
// so the return value may be `null`
export function convertColor(
  value: string,
  mode: ColorPickerMode,
  originalMode?: null
): string | null
// implementation
export function convertColor(
  value: string,
  mode: ColorPickerMode,
  originalMode?: ColorPickerMode | null
): string | null {
  originalMode = originalMode || getModeFromValue(value)

  if (!originalMode)
    return null
  if (originalMode === mode)
    return value

  const conversions = convert[originalMode]
  return (conversions as any)[mode](value)
}
