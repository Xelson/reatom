import type { ControlThemeOverrides } from '../themeTypes'

const glassFocus = {
  color: '#0867d5',
  width: '2px',
  offset: '2px',
  style: 'solid' as const,
}

const chipSelected = {
  foreground: 'var(--text-primary)',
  background: 'var(--liquid-control, rgba(255, 255, 255, 0.32))',
  border: 'var(--liquid-edge, #58617430)',
  shadow: 'inset 0 1px 1px #ffffff90, 0 2px 4px #18233312',
}

const chipSelectedHover = {
  foreground: 'var(--text-primary)',
  background: 'color-mix(in srgb, var(--liquid-control, #fff) 70%, #ffffff)',
  border: 'var(--liquid-edge, #58617430)',
  shadow: 'inset 0 1px 1px #ffffff90, 0 2px 6px #18233318',
}

const viewerChrome = {
  rest: {
    foreground: 'currentColor',
    background: 'transparent',
    border: 'transparent',
    shadow: 'none',
  },
  hover: {
    foreground: 'currentColor',
    background: '#ffffff30',
    border: 'transparent',
    shadow: 'none',
  },
  press: {
    foreground: 'currentColor',
    background: '#ffffff40',
    border: 'transparent',
    shadow: 'none',
  },
  selected: {
    foreground: '#242424',
    background: '#dddddd',
    border: 'transparent',
    shadow: 'none',
  },
  selectedHover: {
    foreground: '#242424',
    background: '#eeeeee',
    border: 'transparent',
    shadow: 'none',
  },
  selectedPress: {
    foreground: '#242424',
    background: '#cccccc',
    border: 'transparent',
    shadow: 'none',
  },
  focus: glassFocus,
}

const glassType = {
  fontSize: '11px',
  fontWeight: '500',
}

const glassPill = {
  radius: '999px',
}

const glassQuietRest = {
  rest: {
    foreground: 'var(--text-primary)',
    background: 'transparent',
    border: 'transparent',
    shadow: 'none',
  },
  geometry: glassPill,
  typography: glassType,
}

const glassOverlay = {
  rest: {
    foreground: '#ffffff',
    background: '#2020203d',
    border: '#ffffff40',
    shadow:
      'inset 1px 0 4px var(--glass-chroma-cyan, transparent), inset -1px 0 4px var(--glass-chroma-violet, transparent), inset 0 1px 0 #ffffff60, 0 2px 6px #0003',
    image: 'var(--glass-refraction-target, none)',
  },
  hover: {
    foreground: '#ffffff',
    background: '#20202055',
    border: '#ffffff60',
    shadow:
      'inset 1px 0 4px var(--glass-chroma-cyan, transparent), inset -1px 0 4px var(--glass-chroma-violet, transparent), inset 0 1px 0 #ffffff60, 0 2px 6px #0003',
    image: 'var(--glass-refraction-target, none)',
  },
  press: {
    foreground: '#ffffff',
    background: '#20202066',
    border: '#ffffff60',
    shadow: 'inset 0 1px 0 #ffffff60, 0 1px 3px #0003',
    image: 'var(--glass-refraction-target, none)',
  },
  selected: chipSelected,
  selectedHover: chipSelectedHover,
  selectedPress: {
    ...chipSelected,
    background: 'var(--active-bg)',
  },
}

export const glassControlOverrides = {
  app: {
    action: { focus: glassFocus, geometry: glassPill },
    quiet: {
      focus: glassFocus,
      ...glassQuietRest,
      selected: chipSelected,
      selectedHover: chipSelectedHover,
      selectedPress: {
        ...chipSelected,
        background: 'var(--active-bg)',
      },
    },
    choice: {
      focus: glassFocus,
      geometry: glassPill,
      typography: glassType,
      selected: chipSelected,
      selectedHover: chipSelectedHover,
      selectedPress: {
        ...chipSelected,
        background: 'var(--active-bg)',
      },
    },
    switch: {
      focus: glassFocus,
      selected: {
        foreground: '#ffffff',
        background: '#248a4b',
        border: '#167139',
        shadow: 'inset 0 1px 3px #0002',
      },
      selectedHover: {
        foreground: '#ffffff',
        background: '#1c7340',
        border: '#167139',
        shadow: 'inset 0 1px 3px #0002',
      },
    },
  },
  viewer: {
    action: { ...viewerChrome, typography: glassType },
    quiet: { ...viewerChrome, typography: glassType },
    choice: { ...viewerChrome, typography: glassType },
    switch: { focus: glassFocus },
  },
  overlay: glassOverlay,
} satisfies ControlThemeOverrides
