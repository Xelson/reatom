import type { ControlSurface } from '../themeTypes'
import { createActivationHandlers } from './activation'
import {
  type ReactiveBoolean,
  type ReactiveString,
  resolveReactiveBoolean,
} from './shared'

export type SwitchProps = {
  label: ReactiveString
  checked: ReactiveBoolean
  onToggle: () => void
  disabled?: ReactiveBoolean
  surface?: ControlSurface
}

export const Switch = ({
  label,
  checked,
  onToggle,
  disabled,
  surface = 'app',
}: SwitchProps) => {
  const checkedValue = () => resolveReactiveBoolean(checked)
  const handlers = createActivationHandlers(onToggle, {
    mode: 'click',
    disabled: () => resolveReactiveBoolean(disabled),
  })

  return (
    <label
      css={`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 0;
        cursor: pointer;
        font-size: 13px;
        color: var(--text-primary);
      `}
    >
      <span>{label}</span>
      <button
        type="button"
        data-ui="switch"
        data-ui-surface={surface}
        role="switch"
        aria-label={label}
        aria-checked={checkedValue}
        attr:data-ui-selected={checkedValue}
        prop:disabled={() => resolveReactiveBoolean(disabled)}
        {...handlers}
      />
    </label>
  )
}
