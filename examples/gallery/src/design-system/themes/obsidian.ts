import type { ControlThemeOverrides } from '../themeTypes'

const silverSelected = {
  foreground: '#131019',
  background: '#c6bfd8',
  border: '#e4e0e9',
  shadow: 'none',
}

const silverStates = {
  selected: silverSelected,
  selectedHover: {
    ...silverSelected,
    background: '#d8d3e4',
  },
  selectedPress: {
    ...silverSelected,
    background: '#b0a8c4',
  },
}

export const obsidianControlOverrides = {
  app: {
    quiet: silverStates,
    choice: silverStates,
  },
  viewer: {
    action: silverStates,
    quiet: silverStates,
    choice: {
      ...silverStates,
      selected: {
        ...silverSelected,
        border: '#c6bfd8',
      },
    },
  },
  overlay: {
    rest: {
      foreground: '#ded7e8',
      background: '#101017db',
      border: '#82758d',
      shadow: 'none',
    },
    hover: {
      foreground: '#ded7e8',
      background: '#1a1a24',
      border: '#82758d',
      shadow: 'none',
    },
    press: {
      foreground: '#ded7e8',
      background: '#0c0c12',
      border: '#82758d',
      shadow: 'none',
    },
    ...silverStates,
  },
} satisfies ControlThemeOverrides
