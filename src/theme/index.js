const breakpoints = {
  values: {
    '2xl': '1440',
    xl: '1280',
    lg: '992',
    md: '768',
    sm: '480',
  },
}

const typography = {
  rootFontSize: 16,
  fontFamily:
    'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
}
typography.pxToRem = (value) => `${(value / typography.rootFontSize).toFixed(3)}rem`

const borderRadius = {
  circle: '50%',
  small: '17px',
}

const theme = {
  breakpoints: {
    ...breakpoints,
    up: (key) => `@media (min-width: ${breakpoints.values[key]}px)`,
    down: (key) => `@media (max-width: ${breakpoints.values[key] - 0.02}px)`,
    between: (min, max) =>
      `@media (min-width: ${breakpoints.values[min]}px) and (max-width: ${
        breakpoints.values[max] - 0.02
      }px)`,
  },
  palette: {
    transparent: 'transparent',
    black: {
      700: '#222222',
      800: '#262626',
      900: '#0d0d0d',
    },
    white: '#fff',
    orange: {
      50: '#FB9559',
      100: '#FB792B',
      200: '#FF6305',
      400: '#FE6405',
    },
    gray: {
      10: '#FAFAFA',
      50: '#C4C4C4',
      100: '#7B7B7B',
      200: '#2E2E2E',
    },
  },

  typography: {
    ...typography,
    fontFamilyOrbitron: `Orbitron, ${typography.fontFamily}`,
    fontFamilyVipnagorgiallaRg: `Vipnagorgialla Rg, ${typography.fontFamily}`,
    fontFamilyNeuropol: `'Neuropol', ${typography.fontFamily}`,
  },
  borderRadius,
}

export default theme
