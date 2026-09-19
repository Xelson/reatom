import type { ResolvedThemeMode, ThemePack } from '../types'

export const DECORATIVE_TOKEN_KEYS = [
  '--font-ui',
  '--bg-primary',
  '--bg-secondary',
  '--bg-tertiary',
  '--bg-elevated',
  '--surface-glass',
  '--surface-strong',
  '--accent',
  '--accent-hover',
  '--accent-soft',
  '--accent-contrast',
  '--text-primary',
  '--text-secondary',
  '--text-muted',
  '--card-bg',
  '--card-border',
  '--border',
  '--border-strong',
  '--toolbar-bg',
  '--panel-bg',
  '--input-bg',
  '--input-border',
  '--hover-bg',
  '--active-bg',
  '--scrollbar-thumb',
  '--shadow',
  '--shadow-strong',
  '--focus-ring',
  '--radius-xs',
  '--radius-sm',
  '--radius-md',
  '--radius-lg',
  '--radius-xl',
  '--radius-round',
  '--hero-glow-1',
  '--hero-glow-2',
  '--overlay-bg',
  '--overlay-control',
  '--overlay-control-hover',
  '--viewer-fg',
  '--viewer-bg',
  '--viewer-bg-hover',
  '--viewer-border',
  '--image-overlay',
  '--app-bg-image',
  '--surface-bg-image',
  '--card-bg-image',
  '--bg-size',
  '--surface-bg-size',
  '--border-width',
  '--border-style',
  '--control-border-style',
  '--card-frame-width',
  '--card-padding',
  '--card-hover-transform',
  '--card-hover-shadow',
  '--selected-shadow',
  '--glow',
  '--toolbar-backdrop-filter',
  '--panel-backdrop-filter',
  '--surface-clip-path',
  '--control-transform',
] as const

export const OPTIONAL_DECORATIVE_TOKEN_KEYS = [
  '--shadow-clearance',
  '--blueprint-viewer-surface',
  '--glass-rim',
  '--glass-rim-strong',
  '--glass-specular',
  '--glass-refraction-target',
  '--glass-chroma-cyan',
  '--glass-chroma-violet',
  '--glass-lens-shadow',
] as const

export type DecorativeTokenKey = (typeof DECORATIVE_TOKEN_KEYS)[number]
export type OptionalDecorativeTokenKey =
  (typeof OPTIONAL_DECORATIVE_TOKEN_KEYS)[number]

export type ThemeVariables = Record<DecorativeTokenKey, string> &
  Partial<Record<OptionalDecorativeTokenKey, string>>

export type ThemeDefinition = Record<ResolvedThemeMode, ThemeVariables>

export const CONTROL_ROLES = ['action', 'quiet', 'choice', 'switch'] as const
export type ControlRole = (typeof CONTROL_ROLES)[number]

export const CONTROL_SURFACES = ['app', 'viewer'] as const
export type ControlSurface = (typeof CONTROL_SURFACES)[number]

export const CONTROL_PAINT_STATES = [
  'rest',
  'hover',
  'press',
  'selected',
  'selectedHover',
  'selectedPress',
  'disabled',
] as const
export type ControlPaintState = (typeof CONTROL_PAINT_STATES)[number]

export type ControlPaint = {
  foreground: string
  background: string
  border: string
  shadow: string
  image?: string
}

export type ControlFocus = {
  color: string
  width: string
  offset: string
  style: 'solid' | 'dashed'
}

export type ControlGeometry = {
  radius: string
  borderWidth: string
  borderStyle: string
  paddingInline: string
  paddingBlock: string
  minHeight: string
  gap: string
  iconSize: string
}

export type ControlTypography = {
  fontFamily: string
  fontSize: string
  fontWeight: string
  letterSpacing: string
  textTransform: string
}

export type ControlMotion = {
  duration: string
  easing: string
}

export type ControlSwitchExtras = {
  knob: string
  knobChecked: string
  width: string
  height: string
  knobSize: string
}

export type RolePalette = {
  rest: ControlPaint
  hover: ControlPaint
  press: ControlPaint
  selected: ControlPaint
  selectedHover: ControlPaint
  selectedPress: ControlPaint
  disabled: ControlPaint
  focus: ControlFocus
  geometry: ControlGeometry
  typography: ControlTypography
  motion: ControlMotion
}

export type SwitchPalette = RolePalette & {
  switch: ControlSwitchExtras
}

export type SurfacePalettes = {
  action: RolePalette
  quiet: RolePalette
  choice: RolePalette
  switch: SwitchPalette
}

export type OverlayPalette = {
  rest: ControlPaint
  hover: ControlPaint
  press: ControlPaint
  selected: ControlPaint
  selectedHover: ControlPaint
  selectedPress: ControlPaint
}

export type ControlTheme = {
  app: SurfacePalettes
  viewer: SurfacePalettes
  overlay: OverlayPalette
}

export type NestedPartial<T> = {
  [K in keyof T]?: T[K] extends string
    ? T[K]
    : T[K] extends
          | ControlPaint
          | ControlFocus
          | ControlGeometry
          | ControlTypography
          | ControlMotion
          | ControlSwitchExtras
      ? Partial<T[K]>
      : NestedPartial<T[K]>
}

export type ControlThemeOverrides = NestedPartial<ControlTheme>

export type ThemePackMeta = {
  value: ThemePack
  label: string
  description: string
  swatches: readonly [string, string, string]
}

export type ControlSize = 'sm' | 'md' | 'lg' | 'icon'
