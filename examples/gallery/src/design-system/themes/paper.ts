import type { ControlThemeOverrides } from '../themeTypes'

const blushSelected = {
  foreground: '#17232d',
  background: 'var(--paper-blush)',
  border: 'var(--paper-blush)',
  shadow: 'none',
}

const blushStates = {
  selected: blushSelected,
  selectedHover: {
    ...blushSelected,
    background: 'color-mix(in srgb, var(--paper-blush) 78%, #17232d)',
  },
  selectedPress: {
    ...blushSelected,
    background: 'color-mix(in srgb, var(--paper-blush) 64%, #17232d)',
  },
}

const paperViewerPaint = {
  rest: {
    foreground: '#17232d',
    background: '#f7f7f2',
    border: 'transparent',
    shadow: 'none',
  },
  hover: {
    foreground: '#17232d',
    background: '#ecece6',
    border: 'transparent',
    shadow: 'none',
  },
  press: {
    foreground: '#17232d',
    background: '#e0e0da',
    border: 'transparent',
    shadow: 'none',
  },
  ...blushStates,
}

const paperViewerRound = {
  ...paperViewerPaint,
  geometry: {
    radius: '50%',
  },
}

export const paperControlOverrides = {
  app: {
    quiet: blushStates,
    choice: blushStates,
  },
  viewer: {
    action: paperViewerRound,
    quiet: paperViewerRound,
    choice: paperViewerPaint,
  },
  overlay: {
    rest: {
      foreground: 'var(--text-primary)',
      background: 'var(--panel-bg)',
      border: 'var(--border)',
      shadow: 'none',
    },
    hover: {
      foreground: 'var(--text-primary)',
      background: 'var(--hover-bg)',
      border: 'var(--border)',
      shadow: 'none',
    },
    press: {
      foreground: 'var(--text-primary)',
      background: 'var(--active-bg)',
      border: 'var(--border)',
      shadow: 'none',
    },
    ...blushStates,
  },
} satisfies ControlThemeOverrides
