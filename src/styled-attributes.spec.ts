import {px, percent, hex, rgb} from './styled-attributes'

describe('px', () => {
  it('should have set the unit correctly', () => {
    let width = px(10)

    expect(width.unit).toBe('px')
  })
})

describe('percent', () => {
  it('should use percent properly', () => {
    let width = percent(100)

    expect(`${width}`).toBe('100%')
  })
})

describe('Color functions', () => {
  it('should create a hex color', () => {
    let color = hex('9bf')

    expect(`${color}`).toBe('#99bbff')
  })

  it('should create a color from rgb', () => {
    let color = rgb(16, 16, 16)

    expect(color.hex).toBe('101010')
  })
})