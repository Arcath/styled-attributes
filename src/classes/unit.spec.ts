import {Unit} from './unit'

describe('Unit', () => {
  it('should accept a unit and value', () => {
    let unit = new Unit(1, 'px')

    expect(unit.unit).toBe('px')
    expect(unit.value).toBe(1)
  })

  it('should support toString', () => {
    let unit = new Unit(1, 'px')

    expect(unit.toString()).toBe('1px')
  })

  it('should support toNumber', () => {
    let unit = new Unit(1, 'px')

    expect(unit.toNumber()).toBe(1)
  })

  it('should support math', () => {
    let width = new Unit(10, 'px')
    let height = new Unit(5, 'px')

    expect(+width).toBe(10)

    expect(+width + +height).toBe(15)
    expect(+width * +height).toBe(50)
  })
})