import { computed } from '@reatom/core'

import { resolvedThemeMode, themePack } from './model'
import { getThemeDefinition } from './themeDefinitions'

export type { ThemeVariables } from './design-system/themeTypes'
export { getThemeDefinition }

export const activeThemeVariables = computed(
  () => getThemeDefinition(themePack())[resolvedThemeMode()],
  'theme.activeVariables',
)

export const GlobalStyles = () => {
  return (
    <div
      css={`
        :root {
          font-family: var(--font-ui);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          background: var(--bg-primary);
          background-image: var(--app-bg-image);
          background-size: var(--bg-size);
          color: var(--text-primary);
          transition:
            background 0.3s,
            color 0.3s;
          min-height: 100vh;
          overflow-x: hidden;
        }

        ::selection {
          background: var(--accent-soft);
          color: var(--text-primary);
        }

        a {
          color: var(--accent);
          text-decoration: none;
        }

        button {
          cursor: pointer;
          font-family: inherit;
          font-size: inherit;
        }

        input,
        select,
        textarea {
          font-family: inherit;
          font-size: inherit;
        }

        button,
        input,
        select,
        textarea {
          outline: none;
        }

        button:focus-visible,
        input:focus-visible,
        select:focus-visible,
        textarea:focus-visible {
          box-shadow: 0 0 0 3px var(--focus-ring);
        }

        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: var(--scrollbar-thumb);
          border-radius: var(--radius-round);
        }

        ::-webkit-scrollbar-thumb:hover {
          background: var(--accent);
        }
      `}
      style={{ display: 'none' }}
    />
  )
}
