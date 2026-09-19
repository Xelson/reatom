import type { Meta, StoryObj } from '@storybook/html'

import { mockFolderTree } from '../__fixtures__/mockData'
import {
  assertFocusVisible,
  assertHoverChangesPaint,
} from '../design-system/testing/paint'
import { StoryWrapper } from '../shared/StoryWrapper'
import { createMyself, type Locator } from '../shared/test'
import { loadGalleryState } from '../shared/testSetup'
import { settingsPanelOpen } from './panelState'
import { SettingsPanel } from './SettingsPanel'

const loc = {
  settingsHeadingAppears: (canvas) =>
    canvas.findByRole('heading', { name: 'Settings' }),
} satisfies Record<string, Locator>

const I = createMyself((I) => ({
  seeSettingsPanelOpen: async () => {
    await I.see(loc.settingsHeadingAppears)
  },
}))

const meta: Meta = {
  title: 'Components/SettingsPanel',
  loaders: [(ctx) => void I.init(ctx)],
}

export default meta

type Story = StoryObj

export const OpenWithDefaults: Story = {
  render: () => {
    loadGalleryState({ tree: mockFolderTree })
    settingsPanelOpen.set(true)
    return (
      <StoryWrapper>
        <SettingsPanel />
      </StoryWrapper>
    )
  },
  play: async () => {
    await I.seeSettingsPanelOpen()
  },
}

const renderCartoonSettings = (mode: 'light' | 'dark') => {
  loadGalleryState({ tree: mockFolderTree })
  settingsPanelOpen.set(true)
  return (
    <StoryWrapper pack="cartoon" mode={mode}>
      <SettingsPanel />
    </StoryWrapper>
  )
}

const playCartoonControlStates = async () => {
  await I.seeSettingsPanelOpen()
  await assertHoverChangesPaint(
    await I.see(async (canvas) => {
      const gaps = await canvas.findAllByRole('button', { name: 'none' })
      return gaps[0] ?? null
    }),
  )
  await assertHoverChangesPaint(
    await I.see((canvas) => canvas.findByRole('button', { name: 'medium' })),
  )
  await assertHoverChangesPaint(
    await I.see((canvas) =>
      canvas.findByRole('switch', { name: 'Show File Sizes' }),
    ),
  )
  await assertFocusVisible(
    await I.see((canvas) => canvas.findByRole('button', { name: 'small' })),
  )
}

export const CartoonLightControlStates: Story = {
  render: () => renderCartoonSettings('light'),
  play: playCartoonControlStates,
}

export const CartoonDarkControlStates: Story = {
  render: () => renderCartoonSettings('dark'),
  play: playCartoonControlStates,
}
