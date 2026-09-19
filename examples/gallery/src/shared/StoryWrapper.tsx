import type { JSX } from '@reatom/jsx'

import { ThemeRoot } from '../design-system'
import { themeMode, themePack } from '../model'
import type { ResolvedThemeMode, ThemePack } from '../types'

export const StoryWrapper = ({
  children,
  pack,
  mode,
}: {
  children: JSX.ElementChildren
  pack?: ThemePack
  mode?: ResolvedThemeMode
}) => {
  if (pack !== undefined) themePack.set(pack)
  if (mode !== undefined) themeMode.set(mode)
  return (
    <ThemeRoot
      pack={pack}
      mode={mode}
      css={`
        min-height: 100vh;
        padding: 20px;
      `}
    >
      {children}
    </ThemeRoot>
  )
}
