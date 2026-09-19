import { expect, test, vi } from 'vitest'

import { createActivationHandlers } from './activation'

test('click mode fires once and honors disabled', () => {
  const action = vi.fn()
  const disabled = { current: false }
  const handlers = createActivationHandlers(action, {
    mode: 'click',
    disabled: () => disabled.current,
    stopPropagation: true,
  })

  const event = {
    stopPropagation: vi.fn(),
    preventDefault: vi.fn(),
  } as unknown as PointerEvent
  handlers['on:click']?.(event)
  expect(action).toHaveBeenCalledTimes(1)
  expect(event.stopPropagation).toHaveBeenCalledTimes(1)

  disabled.current = true
  handlers['on:click']?.(event)
  expect(action).toHaveBeenCalledTimes(1)
})

test('press mode activates on primary mousedown and swallows the click', () => {
  const action = vi.fn()
  const handlers = createActivationHandlers(action, {
    mode: 'press',
    stopPropagation: true,
  })

  const mouseDown = {
    button: 0,
    stopPropagation: vi.fn(),
  } as unknown as MouseEvent
  handlers['on:mousedown']?.(mouseDown)
  expect(action).toHaveBeenCalledTimes(1)

  const click = {
    preventDefault: vi.fn(),
    stopPropagation: vi.fn(),
  } as unknown as PointerEvent
  handlers['on:click']?.(click)
  expect(action).toHaveBeenCalledTimes(1)
  expect(click.preventDefault).toHaveBeenCalledTimes(1)
})

test('press mode activates a click that has no preceding mousedown', () => {
  const action = vi.fn()
  const handlers = createActivationHandlers(action, {
    mode: 'press',
    stopPropagation: true,
  })

  const click = {
    preventDefault: vi.fn(),
    stopPropagation: vi.fn(),
  } as unknown as PointerEvent
  handlers['on:click']?.(click)
  expect(action).toHaveBeenCalledTimes(1)
  expect(click.stopPropagation).toHaveBeenCalledTimes(1)
})

test('press mode does not activate when disabled', () => {
  const action = vi.fn()
  const handlers = createActivationHandlers(action, {
    mode: 'press',
    disabled: () => true,
  })

  handlers['on:mousedown']?.({
    button: 0,
    stopPropagation: vi.fn(),
  } as unknown as MouseEvent)
  handlers['on:click']?.({
    preventDefault: vi.fn(),
    stopPropagation: vi.fn(),
  } as unknown as PointerEvent)
  expect(action).not.toHaveBeenCalled()
})

test('press mode activates from Enter and Space without repeating', () => {
  const action = vi.fn()
  const handlers = createActivationHandlers(action, { mode: 'press' })

  handlers['on:keydown']?.({
    key: 'Enter',
    repeat: false,
    preventDefault: vi.fn(),
    stopPropagation: vi.fn(),
  } as unknown as KeyboardEvent)
  handlers['on:keydown']?.({
    key: ' ',
    repeat: false,
    preventDefault: vi.fn(),
    stopPropagation: vi.fn(),
  } as unknown as KeyboardEvent)
  handlers['on:keydown']?.({
    key: 'Enter',
    repeat: true,
    preventDefault: vi.fn(),
    stopPropagation: vi.fn(),
  } as unknown as KeyboardEvent)

  expect(action).toHaveBeenCalledTimes(2)
})
