import { Button } from '../design-system'
import { currentFolder, folderBreadcrumbSegments } from '../model'

export const BreadcrumbNav = () => (
  <nav
    aria-label="Folder path"
    css={`
      display: flex;
      align-items: center;
      gap: 2px;
      font-size: 13px;
      padding: 6px 12px;
      overflow-x: auto;
      white-space: nowrap;
      min-height: 32px;
    `}
  >
    {() => {
      const segments = folderBreadcrumbSegments()
      if (segments.length === 0)
        return <span css="color: var(--text-muted);">No folder</span>

      const elements: (Element | string)[] = []
      segments.forEach((folder, index) => {
        const isLast = index === segments.length - 1

        if (index > 0) {
          elements.push(
            <span css="color: var(--text-muted); margin: 0 4px; user-select: none;">
              /
            </span>,
          )
        }

        elements.push(
          isLast ? (
            <span css="color: var(--accent); font-weight: 650;">
              {folder.name}
            </span>
          ) : (
            <Button
              appearance="quiet"
              label={folder.name}
              onClick={() => currentFolder.set(folder)}
              size="sm"
              css="padding: 2px 4px; min-height: 24px;"
            />
          ),
        )
      })

      return elements
    }}
  </nav>
)
