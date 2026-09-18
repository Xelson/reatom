import { action, atom, withIndexedDb } from '@reatom/core'

import type { FolderNode } from '../types'
import type { ParsingProgressSnapshot } from './contracts'
import { resetFolderTreeUi } from './navigation'

export const folderTree = atom<FolderNode | null>(null, 'folderTree')
export const currentFolder = atom<FolderNode | null>(null, 'currentFolder')

const selectedFolderHandlePersistKey = 'gallery.selectedFolderHandle'

export const selectedFolderHandle = atom<FileSystemDirectoryHandle | null>(
  null,
  'selectedFolderHandle',
).extend(withIndexedDb(selectedFolderHandlePersistKey))

export async function hasPersistedSelectedFolderHandle(): Promise<boolean> {
  try {
    const { createStore, get } = await import('idb-keyval')
    const store = createStore('reatom_default', 'atoms')
    const rec: unknown = await get(selectedFolderHandlePersistKey, store)
    if (rec === null || rec === undefined || typeof rec !== 'object') {
      return false
    }
    if (!('data' in rec)) return false
    return rec.data != null
  } catch {
    return false
  }
}

export const parsingProgress = atom<ParsingProgressSnapshot>(
  {
    total: 0,
    current: 0,
  },
  'parsingProgress',
)

export const resetFolderState = action(() => {
  resetFolderTreeUi()
  folderTree.set(null)
  currentFolder.set(null)
  parsingProgress.set({ total: 0, current: 0 })
  selectedFolderHandle.set(null)
}, 'folder.resetState')

export const publishFolderScan = action((result: { tree: FolderNode }) => {
  resetFolderTreeUi()
  folderTree.set(result.tree)
  currentFolder.set(result.tree)
  parsingProgress.set({
    total: result.tree.imageCount,
    current: result.tree.imageCount,
  })
}, 'folder.publishScan')
