import type { ControlThemeOverrides } from '../themeTypes'

const dashedFocus = {
  style: 'dashed' as const,
  offset: '4px',
  width: '2px',
  color: 'var(--text-primary)',
}

const viewerInk = {
  rest: {
    foreground: '#111111',
    background: '#ffffff',
    border: '#111111',
    shadow: '2px 3px 0 #000000',
  },
  hover: {
    foreground: '#111111',
    background: '#e8e8e8',
    border: '#111111',
    shadow: '2px 3px 0 #000000',
  },
  press: {
    foreground: '#111111',
    background: '#dedede',
    border: '#111111',
    shadow: '1px 2px 0 #000000',
  },
  selected: {
    foreground: '#ffffff',
    background: '#111111',
    border: '#111111',
    shadow: '2px 3px 0 #000000',
  },
  selectedHover: {
    foreground: '#ffffff',
    background: '#333333',
    border: '#111111',
    shadow: '2px 3px 0 #000000',
  },
  selectedPress: {
    foreground: '#ffffff',
    background: '#000000',
    border: '#111111',
    shadow: 'none',
  },
  disabled: {
    foreground: '#555555',
    background: '#eeeeee',
    border: '#111111',
    shadow: 'none',
  },
  focus: dashedFocus,
}

const overlayInk = {
  rest: {
    foreground: '#111111',
    background: '#ffffff',
    border: '#111111',
    shadow: '2px 2px 0 #111111',
  },
  hover: {
    foreground: '#111111',
    background: '#e8e8e8',
    border: '#111111',
    shadow: '2px 2px 0 #111111',
  },
  press: {
    foreground: '#111111',
    background: '#dedede',
    border: '#111111',
    shadow: '1px 1px 0 #111111',
  },
  selected: viewerInk.selected,
  selectedHover: viewerInk.selectedHover,
  selectedPress: viewerInk.selectedPress,
}

export const cartoonControlOverrides = {
  app: {
    action: { focus: dashedFocus },
    quiet: {
      focus: dashedFocus,
      rest: {
        border: 'transparent',
      },
      hover: {
        background:
          'color-mix(in srgb, var(--text-primary) 10%, var(--input-bg))',
        border: 'var(--text-primary)',
      },
      selected: viewerInk.selected,
      selectedHover: viewerInk.selectedHover,
      selectedPress: viewerInk.selectedPress,
    },
    choice: {
      focus: dashedFocus,
      selected: viewerInk.selected,
      selectedHover: viewerInk.selectedHover,
      selectedPress: viewerInk.selectedPress,
    },
    switch: {
      focus: dashedFocus,
      hover: {
        background:
          'color-mix(in srgb, var(--text-primary) 18%, var(--bg-tertiary))',
        border: 'var(--text-primary)',
      },
    },
  },
  viewer: {
    action: viewerInk,
    quiet: viewerInk,
    choice: viewerInk,
    switch: {
      ...viewerInk,
      switch: {
        knob: '#ffffff',
        knobChecked: '#ffffff',
      },
    },
  },
  overlay: overlayInk,
} satisfies ControlThemeOverrides
