import { readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { expect, test } from 'vitest'

import { controlRecipeCss } from './controlStyles'

const here = dirname(fileURLToPath(import.meta.url))

test('recipe type sits on [data-ui], so ThemeRoot button inherit cannot win', () => {
  const css = controlRecipeCss()
  const typeHook = css.match(
    /\[data-ui="button"\],\s*\[data-ui="switch"\] \{([^}]+)\}/,
  )
  expect(typeHook?.[1]).toMatch(/font-size:\s*var\(--_font-size\)/)
  const whereBlock = css.match(
    /:where\(\[data-ui="button"\], \[data-ui="switch"\]\) \{([^}]+)\}/,
  )
  expect(whereBlock?.[1] ?? '').not.toMatch(/font-size/)
})

test('ThemeRoot only inherits type onto raw buttons', async () => {
  const source = await readFile(join(here, '../ThemeRoot.tsx'), 'utf8')
  expect(source).toContain(':where(button:not([data-ui]))')
})
