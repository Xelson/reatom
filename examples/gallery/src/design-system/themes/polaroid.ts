import type { ControlThemeOverrides } from '../themeTypes'

const viewer = {
  rest: {
    foreground: '#f4ebd8',
    background: '#272823',
    border: 'transparent',
    shadow: 'none',
  },
  hover: {
    foreground: '#f4ebd8',
    background: '#f4ebd81c',
    border: '#f4ebd84d',
    shadow: 'none',
  },
  press: {
    foreground: '#f4ebd8',
    background: '#f4ebd828',
    border: '#f4ebd84d',
    shadow: 'none',
  },
  selected: {
    foreground: '#272823',
    background: '#fff8e9',
    border: '#fff8e9',
    shadow: 'none',
  },
  selectedHover: {
    foreground: '#272823',
    background: '#fff3d6',
    border: '#fff3d6',
    shadow: 'none',
  },
  selectedPress: {
    foreground: '#272823',
    background: '#f0e2c4',
    border: '#f0e2c4',
    shadow: 'none',
  },
}

const coralSelected = {
  foreground: '#fffaf2',
  background: 'var(--polaroid-coral)',
  border: 'var(--polaroid-coral)',
  shadow: 'none',
}

const blueSelected = {
  foreground: '#fffaf2',
  background: 'var(--polaroid-blue)',
  border: 'var(--polaroid-blue)',
  shadow: 'none',
}

export const polaroidControlOverrides = {
  app: {
    quiet: {
      selected: coralSelected,
      selectedHover: {
        ...coralSelected,
        background: 'color-mix(in srgb, var(--polaroid-coral) 82%, #fffaf2)',
      },
      selectedPress: {
        ...coralSelected,
        background: 'color-mix(in srgb, var(--polaroid-coral) 70%, #31261c)',
      },
    },
    choice: {
      selected: blueSelected,
      selectedHover: {
        ...blueSelected,
        background: 'color-mix(in srgb, var(--polaroid-blue) 82%, #fffaf2)',
      },
      selectedPress: {
        ...blueSelected,
        background: 'color-mix(in srgb, var(--polaroid-blue) 70%, #31261c)',
      },
    },
  },
  viewer: {
    action: viewer,
    quiet: viewer,
    choice: viewer,
  },
  overlay: {
    rest: {
      foreground: '#31261c',
      background: 'var(--panel-bg)',
      border: 'var(--border)',
      shadow: 'none',
    },
    hover: {
      foreground: '#31261c',
      background: 'var(--hover-bg)',
      border: 'var(--polaroid-coral)',
      shadow: 'none',
    },
    press: {
      foreground: '#31261c',
      background: 'var(--active-bg)',
      border: 'var(--polaroid-coral)',
      shadow: 'none',
    },
    selected: coralSelected,
    selectedHover: {
      ...coralSelected,
      background: 'color-mix(in srgb, var(--polaroid-coral) 82%, #fffaf2)',
    },
    selectedPress: {
      ...coralSelected,
      background: 'color-mix(in srgb, var(--polaroid-coral) 70%, #31261c)',
    },
  },
} satisfies ControlThemeOverrides
