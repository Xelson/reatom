import type { JSX } from '@reatom/jsx'

import type { ControlSize, ControlSurface } from '../themeTypes'
import { type ActivationMode, createActivationHandlers } from './activation'
import {
  type ReactiveBoolean,
  type ReactiveString,
  resolveReactiveBoolean,
} from './shared'

export type ChoiceSelection = 'pressed' | 'checked' | 'current'

export type ChoiceButtonProps = {
  label: ReactiveString
  selected: ReactiveBoolean
  onClick: () => void
  selection?: ChoiceSelection
  surface?: ControlSurface
  size?: ControlSize
  disabled?: ReactiveBoolean
  title?: ReactiveString
  bracket?: boolean
  slot?: string
  activation?: ActivationMode
  stopPropagation?: boolean
  onBefore?: () => void
  class?: string | (() => string)
  css?: string
  children?: JSX.ElementChildren
}

export const ChoiceButton = ({
  label,
  selected,
  onClick,
  selection = 'pressed',
  surface = 'app',
  size = 'sm',
  disabled,
  title,
  bracket,
  slot,
  activation = 'click',
  stopPropagation = false,
  onBefore,
  class: className,
  css,
  children,
}: ChoiceButtonProps) => {
  const handlers = createActivationHandlers(onClick, {
    mode: activation,
    disabled: () => resolveReactiveBoolean(disabled),
    stopPropagation,
    onBefore,
  })
  const selectedValue = () => resolveReactiveBoolean(selected)

  return (
    <button
      type="button"
      data-ui="button"
      data-ui-role="choice"
      data-ui-surface={surface}
      data-ui-size={size}
      data-terminal-bracket={bracket ? 'true' : undefined}
      data-ui-slot={slot}
      attr:data-ui-selected={selectedValue}
      role={selection === 'checked' ? 'checkbox' : undefined}
      aria-pressed={selection === 'pressed' ? selectedValue : undefined}
      aria-checked={selection === 'checked' ? selectedValue : undefined}
      attr:aria-current={
        selection === 'current'
          ? () => (selectedValue() ? 'true' : undefined)
          : undefined
      }
      aria-label={label}
      title={title ?? (size === 'icon' ? label : undefined)}
      prop:disabled={() => resolveReactiveBoolean(disabled)}
      class={className}
      css={css}
      {...handlers}
    >
      {children ?? label}
    </button>
  )
}
