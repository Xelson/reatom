import type { ControlThemeOverrides } from '../themeTypes'

const tracking = {
  letterSpacing: '0.04em',
}

export const terminalControlOverrides = {
  app: {
    action: { typography: tracking },
    quiet: { typography: tracking },
    choice: { typography: tracking },
    switch: { typography: tracking },
  },
  viewer: {
    action: { typography: tracking },
    quiet: { typography: tracking },
    choice: { typography: tracking },
    switch: { typography: tracking },
  },
} satisfies ControlThemeOverrides
