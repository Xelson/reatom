import { readdir, readFile } from 'node:fs/promises'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

import { expect, test } from 'vitest'

const srcDir = join(dirname(fileURLToPath(import.meta.url)), '..')

const allowedButtonFiles = new Set([
  'design-system/controls/Button.tsx',
  'design-system/controls/ChoiceButton.tsx',
  'design-system/controls/Switch.tsx',
  'components/FolderTree.tsx',
])

const collectFiles = async (dir: string, suffix: string): Promise<string[]> => {
  const entries = await readdir(dir, { withFileTypes: true })
  const files: string[] = []
  for (const entry of entries) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(path, suffix)))
      continue
    }
    if (entry.name.endsWith(suffix)) files.push(path)
  }
  return files
}

test('feature files do not introduce raw buttons outside the design system', async () => {
  const files = await collectFiles(srcDir, '.tsx')
  const violations: string[] = []

  for (const file of files) {
    const rel = relative(srcDir, file).replaceAll('\\', '/')
    if (allowedButtonFiles.has(rel)) continue
    const source = await readFile(file, 'utf8')
    if (source.includes('<button')) {
      violations.push(rel)
    }
  }

  expect(violations).toEqual([])
})
