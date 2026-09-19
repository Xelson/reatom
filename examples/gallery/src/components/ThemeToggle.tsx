import { IconButton } from '../design-system'
import { resolvedThemeMode, toggleResolvedThemeMode } from '../model'
import { MoonIcon, SunIcon } from './Icons'

export const ThemeToggle = () => (
  <IconButton
    label="Toggle theme"
    onClick={toggleResolvedThemeMode}
    css="width: 36px; height: 36px;"
  >
    {() => (resolvedThemeMode() === 'light' ? <SunIcon /> : <MoonIcon />)}
  </IconButton>
)
