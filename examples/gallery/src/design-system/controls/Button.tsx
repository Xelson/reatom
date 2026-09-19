import type { JSX } from '@reatom/jsx'

import type { ControlSize, ControlSurface } from '../themeTypes'
import { type ActivationMode, createActivationHandlers } from './activation'
import {
  type ReactiveBoolean,
  type ReactiveString,
  resolveReactiveBoolean,
} from './shared'

export type ButtonAppearance = 'action' | 'quiet'

export type ButtonProps = {
  label: ReactiveString
  onClick: () => void
  appearance?: ButtonAppearance
  surface?: ControlSurface
  size?: ControlSize
  disabled?: ReactiveBoolean
  selected?: ReactiveBoolean
  title?: ReactiveString
  expanded?: ReactiveBoolean
  bracket?: boolean
  describedBy?: string
  slot?: string
  activation?: ActivationMode
  stopPropagation?: boolean
  onBefore?: () => void
  type?: 'button' | 'submit'
  class?: string | (() => string)
  css?: string
  'style:left'?: string | (() => string)
  children?: JSX.ElementChildren
}

export const Button = ({
  label,
  onClick,
  appearance = 'action',
  surface = 'app',
  size = 'md',
  disabled,
  selected,
  title,
  expanded,
  bracket,
  describedBy,
  slot,
  activation = 'click',
  stopPropagation = false,
  onBefore,
  type = 'button',
  class: className,
  css,
  'style:left': styleLeft,
  children,
}: ButtonProps) => {
  const handlers = createActivationHandlers(onClick, {
    mode: activation,
    disabled: () => resolveReactiveBoolean(disabled),
    stopPropagation,
    onBefore,
  })

  return (
    <button
      type={type}
      data-ui="button"
      data-ui-role={appearance}
      data-ui-surface={surface}
      data-ui-size={size}
      data-terminal-bracket={bracket ? 'true' : undefined}
      data-ui-slot={slot}
      attr:aria-describedby={describedBy}
      attr:data-ui-selected={
        selected === undefined
          ? undefined
          : () => resolveReactiveBoolean(selected)
      }
      aria-pressed={
        selected === undefined
          ? undefined
          : () => resolveReactiveBoolean(selected)
      }
      aria-label={label}
      title={title ?? (size === 'icon' ? label : undefined)}
      aria-expanded={
        expanded === undefined
          ? undefined
          : () => resolveReactiveBoolean(expanded)
      }
      prop:disabled={() => resolveReactiveBoolean(disabled)}
      class={className}
      css={css}
      style:left={styleLeft}
      {...handlers}
    >
      {children ?? label}
    </button>
  )
}
