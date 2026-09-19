import { isAbort, wrap } from '@reatom/core'

import { Button } from '../design-system'
import {
  folderTree,
  openFolder,
  pendingFolderRestore,
  requestFolderRestore,
  restoreSelectedFolder,
  selectedFolderHandle,
} from '../model'

export const RestoreSelectedFolder = () => (
  <>
    <div
      style={{ display: 'none' }}
      ref={() => {
        let restoreStarted = false

        return selectedFolderHandle.subscribe(
          wrap((handle) => {
            if (restoreStarted) return
            if (handle === null) return
            if (folderTree() !== null) return
            if (openFolder.pending() > 0 || restoreSelectedFolder.pending() > 0)
              return

            restoreStarted = true
            restoreSelectedFolder().catch((error: unknown) => {
              if (isAbort(error)) return
              queueMicrotask(() => {
                throw error
              })
            })
          }),
        )
      }}
    />
    {() => {
      const pendingHandle = pendingFolderRestore()
      if (pendingHandle === null) return null

      return (
        <div
          role="status"
          css={`
            position: fixed;
            left: 50%;
            bottom: 24px;
            z-index: 1200;
            display: flex;
            align-items: center;
            gap: 12px;
            max-width: min(92vw, 520px);
            padding: 12px 14px;
            border: var(--border-width) var(--control-border-style)
              var(--border-color);
            border-radius: var(--radius-md);
            background: var(--bg-elevated);
            color: var(--text-primary);
            box-shadow: 0 14px 34px var(--shadow);
            transform: translateX(-50%);
          `}
        >
          <span
            css={`
              font-size: 14px;
              line-height: 1.4;
            `}
          >
            Restore your previous folder?
          </span>
          <Button
            label="Restore folder"
            onClick={() => requestFolderRestore()}
            css="flex-shrink: 0;"
          />
        </div>
      )
    }}
  </>
)
