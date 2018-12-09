// Typography
const fonts = {
  sans:"'Quicksand', sans-serif",
}

export const font = fonts.sans;
export const fontFamilies = fonts;
export const monospace = `"SF Mono", "Roboto Mono", Menlo, monospace`

export const fontSizes = [
  12,
  14,
  16,
  20,
  24,
  32,
  48,
  64,
  72,
  96
]

export const weights = [
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900
]

// Colors
export const colors = {
  "blue": "#00ADEF",
  "green": "#22AD00",
  "orange": "#FF8C00",
  "red": "#ee5555",
  "navy": "#484fd1",
  "pink": "#cd32cd",
  "purple": "#7f32cd"
}

export const breakpoints = [
  '32em',
  '48em',
  '64em',
  '80em'
]

export const space = [
  0,
  4,
  8,
  16,
  32,
  64,
  128,
]

export const radius = 4

export default {
  font,
  monospace,
  fontFamilies,
  weights,
  fontSizes,
  colors,
  breakpoints,
  space,
  radius
}
