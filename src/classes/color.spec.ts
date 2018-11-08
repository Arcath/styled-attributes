import {Color} from './color'

describe('Color', () => {
  it('should create a new color', () => {
    ['9bf', '#9bf', '99bbff', '#99bbff'].forEach((hex) => {
      let color = new Color(hex)

      expect(color.hex).toBe('99bbff')
      expect(color.toString()).toBe('#99bbff')
    })

    let color = new Color('WRONGINPUT')

    expect(color.hex).toBe('000000')
  })

  it('should convert to rgb', () => {
    let color = new Color('102030')

    expect(color.r()).toBe(16)
    expect(color.g()).toBe(32)
    expect(color.b()).toBe(48)
  })

  it('should calculate hsl', () => {
    let color = new Color('102030')

    expect(color.h()).toBe(210)
    expect(color.s()).toBe(50)
    expect(color.l()).toBe(12.5)

    color = new Color('302010')

    expect(color.h()).toBe(30)

    color = new Color('203010')

    expect(color.h()).toBe(90)

    color = new Color('FFFFFF')

    expect(color.s()).toBe(0)
  })

  it('should lighten a color', () => {
    let color = new Color('010101')

    let white = color.lighten(100)

    expect(white.hex).toBe('222222')
  })

  it('should darken a color', () => {
    let color = new Color('222222')

    let newColor = color.darken(100)

    expect(newColor.hex).toBe('000000')
  })

  it('should fade a colour', () => {
    let color = new Color('222')

    let faded = color.fade(10)

    expect(faded.alpha).toBe(0.9)
    expect(`${faded}`).toBe('rgba(34, 34, 34, 0.9)')
  })
})