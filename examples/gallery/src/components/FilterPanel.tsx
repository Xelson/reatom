import { Button, IconButton, Switch } from '../design-system'
import {
  clearFilters,
  filterSizeMaxKb,
  filterSizeMinKb,
  filterTypes,
  IMAGE_TYPE_OPTIONS,
  includeSubfolders,
  searchQuery,
  setFilterSizeMaxKb,
  setFilterSizeMinKb,
  toggleFilterType,
} from '../model'
import { CloseIcon } from './Icons'
import { filterPanelOpen } from './panelState'

const TypeCheckbox = ({ ext, label }: { ext: string; label: string }) => (
  <label
    css={`
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px 0;
      cursor: pointer;
      font-size: 13px;
      color: var(--text-primary);

      &:hover {
        color: var(--accent);
      }
    `}
  >
    <input
      type="checkbox"
      checked={() => filterTypes().has(ext)}
      on:change={() => toggleFilterType(ext)}
      css={`
        accent-color: var(--accent);
        width: 16px;
        height: 16px;
      `}
    />
    <span>{label}</span>
  </label>
)

export const FilterPanel = () => (
  <aside
    role="dialog"
    aria-modal="true"
    aria-label="Filters"
    aria-hidden={() => !filterPanelOpen()}
    prop:inert={() => !filterPanelOpen()}
    attr:data-open={filterPanelOpen}
    css={`
      position: fixed;
      top: 0;
      right: 0;
      width: 300px;
      height: 100vh;
      background: var(--bg-secondary);
      border-left: var(--border-width) var(--border-style) var(--border);
      z-index: 1000;
      transform: translateX(100%);
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      overflow-y: auto;
      padding: 20px;
      box-shadow: -18px 0 48px var(--shadow-strong);
      background-color: var(--panel-bg);
      background-image: var(--surface-bg-image);
      background-size: var(--surface-bg-size);
      backdrop-filter: var(--panel-backdrop-filter);
      clip-path: var(--surface-clip-path);

      &[data-open='true'] {
        transform: translateX(0);
      }
    `}
  >
    <div class="gallery-panel-scroll" css="display: contents;">
      <div
        css={`
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        `}
      >
        <h2
          css={`
            font-size: 16px;
            font-weight: 600;
            color: var(--text-primary);
          `}
        >
          Filters
        </h2>
        <IconButton
          label="Close filters"
          onClick={() => filterPanelOpen.set(false)}
        >
          <CloseIcon />
        </IconButton>
      </div>

      <div css="margin-bottom: 16px;">
        <input
          type="search"
          placeholder="Search by filename..."
          aria-label="Search by filename"
          model:value={searchQuery}
          css={`
            width: 100%;
            padding: 8px 12px;
            border: var(--border-width) var(--control-border-style)
              var(--border);
            border-radius: var(--radius-sm);
            background: var(--input-bg);
            color: var(--text-primary);
            font-size: 13px;
            outline: none;
            transition: border-color 0.15s;

            &:focus {
              border-color: var(--accent);
              box-shadow: 0 0 0 3px var(--focus-ring);
            }

            &::placeholder {
              color: var(--text-secondary);
            }
          `}
        />
      </div>

      <h3
        css={`
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
          margin-bottom: 8px;
        `}
      >
        File Types
      </h3>
      <div class="filter-type-options" css="margin-bottom: 16px;">
        {IMAGE_TYPE_OPTIONS.map((option) => (
          <TypeCheckbox ext={option.ext} label={option.label} />
        ))}
      </div>

      <h3
        css={`
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
          margin-bottom: 8px;
        `}
      >
        File Size (KB)
      </h3>
      <div css="display: flex; gap: 8px; margin-bottom: 16px;">
        <input
          type="number"
          placeholder="Min"
          aria-label="Minimum file size in KB"
          value={filterSizeMinKb}
          on:input={(event: Event & { currentTarget: HTMLInputElement }) =>
            setFilterSizeMinKb(Number(event.currentTarget.value))
          }
          css={`
            width: 50%;
            padding: 6px 10px;
            border: var(--border-width) var(--control-border-style)
              var(--border);
            border-radius: var(--radius-sm);
            background: var(--input-bg);
            color: var(--text-primary);
            font-size: 13px;
            outline: none;

            &:focus {
              border-color: var(--accent);
              box-shadow: 0 0 0 3px var(--focus-ring);
            }

            &::placeholder {
              color: var(--text-secondary);
            }
          `}
        />
        <input
          type="number"
          placeholder="Max"
          aria-label="Maximum file size in KB"
          value={filterSizeMaxKb}
          on:input={(event: Event & { currentTarget: HTMLInputElement }) => {
            const value = event.currentTarget.value
            if (value === '') {
              setFilterSizeMaxKb(null)
              return
            }
            setFilterSizeMaxKb(Number(value))
          }}
          css={`
            width: 50%;
            padding: 6px 10px;
            border: var(--border-width) var(--control-border-style)
              var(--border);
            border-radius: var(--radius-sm);
            background: var(--input-bg);
            color: var(--text-primary);
            font-size: 13px;
            outline: none;

            &:focus {
              border-color: var(--accent);
              box-shadow: 0 0 0 3px var(--focus-ring);
            }

            &::placeholder {
              color: var(--text-secondary);
            }
          `}
        />
      </div>

      <div css="margin-bottom: 16px;">
        <Switch
          label="Include Subfolders"
          checked={includeSubfolders}
          onToggle={includeSubfolders.toggle}
        />
      </div>

      <Button
        appearance="quiet"
        label="Clear All Filters"
        onClick={clearFilters}
        css="width: 100%;"
      />
    </div>
  </aside>
)
