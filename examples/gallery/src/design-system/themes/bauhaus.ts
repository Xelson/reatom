import type { ControlThemeOverrides } from '../themeTypes'

const yellowSelected = {
  foreground: '#20211f',
  background: 'var(--bauhaus-yellow)',
  border: 'var(--bauhaus-yellow)',
  shadow: 'none',
}

const blueSelected = {
  foreground: '#ffffff',
  background: 'var(--bauhaus-blue)',
  border: 'var(--bauhaus-blue)',
  shadow: 'none',
}

export const bauhausControlOverrides = {
  app: {
    quiet: {
      selected: yellowSelected,
      selectedHover: {
        ...yellowSelected,
        background: 'color-mix(in srgb, var(--bauhaus-yellow) 82%, #20211f)',
      },
      selectedPress: {
        ...yellowSelected,
        background: 'color-mix(in srgb, var(--bauhaus-yellow) 70%, #20211f)',
        shadow: 'none',
      },
    },
    choice: {
      selected: blueSelected,
      selectedHover: {
        ...blueSelected,
        background: 'color-mix(in srgb, var(--bauhaus-blue) 82%, #ffffff)',
      },
      selectedPress: {
        ...blueSelected,
        background: 'color-mix(in srgb, var(--bauhaus-blue) 70%, #20211f)',
      },
    },
  },
  overlay: {
    rest: {
      foreground: '#20211f',
      background: 'var(--panel-bg)',
      border: 'var(--border)',
      shadow: 'none',
    },
    hover: {
      foreground: '#20211f',
      background: 'var(--hover-bg)',
      border: 'var(--border)',
      shadow: 'none',
    },
    press: {
      foreground: '#20211f',
      background: 'var(--active-bg)',
      border: 'var(--border)',
      shadow: 'none',
    },
    selected: yellowSelected,
    selectedHover: {
      ...yellowSelected,
      background: 'color-mix(in srgb, var(--bauhaus-yellow) 82%, #20211f)',
    },
    selectedPress: {
      ...yellowSelected,
      background: 'color-mix(in srgb, var(--bauhaus-yellow) 70%, #20211f)',
    },
  },
} satisfies ControlThemeOverrides
