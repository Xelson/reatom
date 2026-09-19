import type { Meta, StoryObj } from '@storybook/html'

import { StoryWrapper } from '../../shared/StoryWrapper'
import { createMyself } from '../../shared/test'
import { Button } from '../controls/Button'
import { ChoiceButton } from '../controls/ChoiceButton'
import { Switch } from '../controls/Switch'
import { assertHoverChangesPaint } from '../testing/paint'
import { THEME_PACKS } from './registry'

const I = createMyself()

const meta: Meta = {
  title: 'Design System/ThemeMatrix',
  loaders: [(ctx) => void I.init(ctx)],
}

export default meta

type Story = StoryObj

export const AllPacksAndModes: Story = {
  render: () => (
    <div css="display: grid; gap: 24px;">
      {THEME_PACKS.flatMap((pack) =>
        (['light', 'dark'] as const).map((mode) => (
          <StoryWrapper pack={pack.value} mode={mode}>
            <section
              aria-label={`${pack.label} ${mode}`}
              css="display: flex; flex-wrap: wrap; gap: 8px; align-items: center;"
            >
              <Button
                label={`${pack.value} ${mode} action`}
                onClick={() => {}}
              />
              <ChoiceButton
                label={`${pack.value} ${mode} choice`}
                selected={() => false}
                onClick={() => {}}
              />
              <ChoiceButton
                label={`${pack.value} ${mode} selected`}
                selected={() => true}
                onClick={() => {}}
              />
              <ChoiceButton
                label={`${pack.value} ${mode} viewer`}
                selected={() => false}
                surface="viewer"
                onClick={() => {}}
              />
              <Switch
                label={`${pack.value} ${mode} switch`}
                checked={() => false}
                onToggle={() => {}}
              />
            </section>
          </StoryWrapper>
        )),
      )}
    </div>
  ),
  play: async () => {
    for (const pack of THEME_PACKS) {
      for (const mode of ['light', 'dark'] as const) {
        const choice = await I.see((canvas) =>
          canvas.findByRole('button', {
            name: `${pack.value} ${mode} choice`,
          }),
        )
        await assertHoverChangesPaint(choice)
        const selected = await I.see((canvas) =>
          canvas.findByRole('button', {
            name: `${pack.value} ${mode} selected`,
          }),
        )
        await assertHoverChangesPaint(selected)
      }
    }
  },
}
