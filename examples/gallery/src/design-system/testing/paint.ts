import { expect } from 'storybook/test'

export type PaintSnapshot = {
  color: string
  backgroundColor: string
  borderTopColor: string
  boxShadow: string
  outlineColor: string
  outlineWidth: string
}

const transparentShadow =
  /^(none|rgba?\(0,\s*0,\s*0,\s*0\)\s+0px\s+0px\s+0px\s+0px)$/

const normalizeShadow = (value: string) =>
  transparentShadow.test(value) ? 'none' : value

export const snapshotPaint = (element: HTMLElement): PaintSnapshot => {
  const style = getComputedStyle(element)
  return {
    color: style.color,
    backgroundColor: style.backgroundColor,
    borderTopColor: style.borderTopColor,
    boxShadow: normalizeShadow(style.boxShadow),
    outlineColor: style.outlineColor,
    outlineWidth: style.outlineWidth,
  }
}

export const paintsDiffer = (before: PaintSnapshot, after: PaintSnapshot) =>
  before.color !== after.color ||
  before.backgroundColor !== after.backgroundColor ||
  before.borderTopColor !== after.borderTopColor ||
  before.boxShadow !== after.boxShadow

const waitForFrame = () =>
  new Promise<void>((resolve) => {
    requestAnimationFrame(() => resolve())
  })

export const assertHoverChangesPaint = async (element: HTMLElement) => {
  const { page } = await import('vitest/browser')
  const before = snapshotPaint(element)
  await page.elementLocator(element).hover()
  await waitForFrame()
  await expect(paintsDiffer(before, snapshotPaint(element))).toBe(true)
}

export const assertFocusVisible = async (element: HTMLElement) => {
  element.focus()
  await waitForFrame()
  const paint = snapshotPaint(element)
  await expect(element.matches(':focus-visible')).toBe(true)
  await expect(paint.outlineWidth !== '0px').toBe(true)
  await expect(paint.outlineColor !== paint.backgroundColor).toBe(true)
}
