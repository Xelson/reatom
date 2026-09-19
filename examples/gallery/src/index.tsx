import './setup'

import { action, wrap } from '@reatom/core'
import { mount } from '@reatom/jsx'

import { buildFixtureFolderTree } from './__fixtures__/fixtureLoader'
import { App } from './App'
import {
  folderTree,
  hasPersistedSelectedFolderHandle,
  publishFolderScan,
  selectedFolderHandle,
} from './model'

const loadDevDefaultFolderIfNoSaved = action(async () => {
  if (folderTree() !== null || selectedFolderHandle() !== null) return

  const hasSavedFolder = await wrap(hasPersistedSelectedFolderHandle())
  if (
    hasSavedFolder ||
    folderTree() !== null ||
    selectedFolderHandle() !== null
  ) {
    return
  }

  publishFolderScan({
    tree: buildFixtureFolderTree('tier-b', 'png-formats'),
  })
}, 'loadDevDefaultFolderIfNoSaved')

if (import.meta.env.DEV) {
  loadDevDefaultFolderIfNoSaved()
}

const { unmount } = mount(document.getElementById('app')!, <App />)

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    unmount()
  })
  import.meta.hot.accept()
}
