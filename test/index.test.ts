import { describe, expect, it } from 'vitest'
import { sum } from '../core'

describe('Demo', () => {
  it('check sum function', () => {
    expect(sum(1, 2)).toEqual(3)
  })
})
