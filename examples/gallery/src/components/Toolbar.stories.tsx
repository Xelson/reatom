import type { Meta, StoryObj } from '@storybook/html'
import { expect } from 'storybook/test'

import { mockFolderTree } from '../__fixtures__/mockData'
import { StoryWrapper } from '../shared/StoryWrapper'
import {
  createMyself,
  type DefiniteLocator,
  type Locator,
} from '../shared/test'
import { loadEmptyState, loadGalleryState } from '../shared/testSetup'
import { Toolbar } from './Toolbar'

const waitForUpdate = () => new Promise<void>((r) => setTimeout(r, 50))

const loc = {
  openButtonAppears: (canvas) => canvas.findByRole('button', { name: /Open/i }),
  resetButtonAppears: (canvas) =>
    canvas.findByRole('button', { name: /^Reset$/ }),
  maybeResetButton: (canvas) =>
    canvas.queryByRole('button', { name: /^Reset$/ }),
  searchInputAppears: (canvas) =>
    canvas.findByPlaceholderText('Search images...'),
  listViewButtonAppears: (canvas) =>
    canvas.findByRole('button', { name: 'list view' }),
} satisfies Record<string, Locator>

const I = createMyself((I) => ({
  seeToolbarWithGallery: async () => {
    await I.see(loc.openButtonAppears)
    await I.see(loc.resetButtonAppears)
    await I.see(loc.searchInputAppears)
  },
  seeToolbarEmpty: async () => {
    await I.see(loc.openButtonAppears)
    await I.dontSee(loc.maybeResetButton)
  },
  resetOpenedFolder: async () => {
    await I.click(loc.resetButtonAppears as DefiniteLocator)
    await waitForUpdate()
    await I.dontSee(loc.maybeResetButton)
  },
  switchToListView: async () => {
    await I.click(loc.listViewButtonAppears as DefiniteLocator)
    await waitForUpdate()
    const listBtn = await I.resolveLocator(
      loc.listViewButtonAppears as DefiniteLocator,
    )
    await expect(listBtn).toHaveAttribute('aria-pressed', 'true')
  },
}))

const meta: Meta = {
  title: 'Components/Toolbar',
  loaders: [(ctx) => void I.init(ctx)],
}

export default meta

type Story = StoryObj

export const WithLoadedGallery: Story = {
  render: () => {
    loadGalleryState({ tree: mockFolderTree })
    return (
      <StoryWrapper>
        <Toolbar />
      </StoryWrapper>
    )
  },
  play: async () => {
    await I.seeToolbarWithGallery()
  },
}

export const EmptyState: Story = {
  render: () => {
    loadEmptyState()
    return (
      <StoryWrapper>
        <Toolbar />
      </StoryWrapper>
    )
  },
  play: async () => {
    await I.seeToolbarEmpty()
  },
}

export const ResetOpenedFolder: Story = {
  render: () => {
    loadGalleryState({ tree: mockFolderTree })
    return (
      <StoryWrapper>
        <Toolbar />
      </StoryWrapper>
    )
  },
  play: async () => {
    await I.resetOpenedFolder()
  },
}

export const ViewModeToggle: Story = {
  render: () => {
    loadGalleryState({ tree: mockFolderTree })
    return (
      <StoryWrapper>
        <Toolbar />
      </StoryWrapper>
    )
  },
  play: async () => {
    await I.switchToListView()
  },
}
