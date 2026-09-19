import type { JSX } from '@reatom/jsx'

import { srOnlyCss } from '../a11y'
import { ThemeRoot } from '../design-system'
import { BlueprintFooter } from './BlueprintDetails'
import { ObsidianFooter } from './ObsidianDetails'

export const AppShell = ({ children }: { children: JSX.ElementChildren }) => (
  <ThemeRoot
    includeAtmosphere
    bindDocument
    css={`
      height: 100vh;
      overflow: hidden;
    `}
  >
    <a
      href="#gallery-main"
      css={`
        ${srOnlyCss}
        &:focus {
          position: fixed;
          top: 12px;
          left: 12px;
          z-index: 2000;
          width: auto;
          height: auto;
          margin: 0;
          padding: 10px 14px;
          clip: auto;
          overflow: visible;
          white-space: nowrap;
          background: var(--accent);
          color: var(--accent-contrast);
          border-radius: var(--radius-sm);
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          box-shadow: var(--glow);
        }
      `}
    >
      Skip to gallery
    </a>
    {children}
    <BlueprintFooter />
    <ObsidianFooter />
  </ThemeRoot>
)
