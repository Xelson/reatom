import { atom, reatomBoolean } from '@reatom/core'
import type { Meta, StoryObj } from '@storybook/html'
import { expect, fn } from 'storybook/test'

import { StoryWrapper } from '../../shared/StoryWrapper'
import { createMyself, type Locator } from '../../shared/test'
import { assertFocusVisible, assertHoverChangesPaint } from '../testing/paint'
import { Button } from './Button'
import { ChoiceButton } from './ChoiceButton'
import { IconButton } from './IconButton'
import { Switch } from './Switch'

const loc = {
  actionAppears: (canvas) => canvas.findByRole('button', { name: 'Save' }),
  quietAppears: (canvas) => canvas.findByRole('button', { name: 'Cancel' }),
  unselectedAppears: (canvas) =>
    canvas.findByRole('button', { name: 'Unselected' }),
  selectedAppears: (canvas) =>
    canvas.findByRole('button', { name: 'Selected' }),
  switchAppears: (canvas) => canvas.findByRole('switch', { name: 'Enabled' }),
  disabledAppears: (canvas) =>
    canvas.findByRole('button', { name: 'Disabled' }),
  iconAppears: (canvas) => canvas.findByRole('button', { name: 'Favorite' }),
} satisfies Record<string, Locator>

const I = createMyself()

const selected = atom(true, 'controlStates.selected')
const checked = reatomBoolean(false, 'controlStates.checked')
const onAction = fn()

const Specimen = () => (
  <div css="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
    <Button label="Save" onClick={onAction} />
    <Button appearance="quiet" label="Cancel" onClick={onAction} />
    <ChoiceButton
      label="Unselected"
      selected={() => false}
      onClick={onAction}
    />
    <ChoiceButton
      label="Selected"
      selected={selected}
      onClick={() => selected.set((value) => !value)}
    />
    <Switch label="Enabled" checked={checked} onToggle={checked.toggle} />
    <Button label="Disabled" onClick={onAction} disabled />
    <IconButton label="Favorite" selected={selected} onClick={onAction}>
      <span aria-hidden="true">★</span>
    </IconButton>
    <IconButton
      label="Sized"
      onClick={onAction}
      css="width: 24px; height: 24px;"
    >
      <span aria-hidden="true">★</span>
    </IconButton>
  </div>
)

const meta: Meta = {
  title: 'Design System/ControlStates',
  loaders: [(ctx) => void I.init(ctx)],
}

export default meta

type Story = StoryObj

export const CartoonLight: Story = {
  render: () => (
    <StoryWrapper pack="cartoon" mode="light">
      <Specimen />
    </StoryWrapper>
  ),
  play: async () => {
    const unselected = await I.see(loc.unselectedAppears)
    await expect(getComputedStyle(unselected).fontSize).toBe('12px')
    await assertHoverChangesPaint(unselected)
    const selectedButton = await I.see(loc.selectedAppears)
    await assertHoverChangesPaint(selectedButton)
    const switchControl = await I.see(loc.switchAppears)
    await assertHoverChangesPaint(switchControl)
    await I.see(loc.actionAppears)
    await pageKeyboardFocus(await I.see(loc.quietAppears))
    const sized = await I.see((canvas) =>
      canvas.findByRole('button', { name: 'Sized' }),
    )
    await expect(getComputedStyle(sized).width).toBe('24px')
    const disabled = await I.see(loc.disabledAppears)
    await expect(disabled).toBeDisabled()
    onAction.mockClear()
    disabled.click()
    await expect(onAction).not.toHaveBeenCalled()
  },
}

export const CartoonDark: Story = {
  render: () => (
    <StoryWrapper pack="cartoon" mode="dark">
      <Specimen />
    </StoryWrapper>
  ),
  play: async () => {
    await assertHoverChangesPaint(await I.see(loc.unselectedAppears))
    await assertHoverChangesPaint(await I.see(loc.selectedAppears))
    await assertHoverChangesPaint(await I.see(loc.switchAppears))
  },
}

export const ReverseMountOrder: Story = {
  render: () => (
    <div>
      <StoryWrapper pack="paper" mode="light">
        <p>Paper specimen</p>
        <Button label="Paper first" onClick={onAction} />
      </StoryWrapper>
      <StoryWrapper pack="cartoon" mode="light">
        <Button label="Cartoon second" onClick={onAction} />
      </StoryWrapper>
    </div>
  ),
  play: async () => {
    const paperLabel = await I.see((canvas) =>
      canvas.findByText('Paper specimen'),
    )
    const { page } = await import('vitest/browser')
    await page.elementLocator(paperLabel).hover()
    const paper = await I.see((canvas) =>
      canvas.findByRole('button', { name: 'Paper first' }),
    )
    const cartoon = await I.see((canvas) =>
      canvas.findByRole('button', { name: 'Cartoon second' }),
    )
    await assertHoverChangesPaint(paper)
    await assertHoverChangesPaint(cartoon)
  },
}

const pageKeyboardFocus = async (element: HTMLElement) => {
  await assertFocusVisible(element)
}
