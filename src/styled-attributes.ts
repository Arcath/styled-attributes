import {Unit, PercentUnit} from './classes/unit'
import {Color, fromRGB} from './classes/color'

const createUnitFunction = (unit: string) => {
  return (value: number) => {
    return new Unit(value, unit)
  }
}

// Absolute Lengths

export const px = createUnitFunction('px')
export const cm = createUnitFunction('cm')
export const mm = createUnitFunction('mm')
export const pt = createUnitFunction('pt')
export const pc = createUnitFunction('pc')

// Relative Lengths

export const em = createUnitFunction('em')
export const ex = createUnitFunction('ex')
export const ch = createUnitFunction('ch')
export const rem = createUnitFunction('rem')
export const vw = createUnitFunction('vw')
export const vh = createUnitFunction('vh')
export const vmin = createUnitFunction('vmin')
export const vmax = createUnitFunction('vmax')
export const percent = (value: number) => {
  return new PercentUnit(value)
}

// Colors

export const hex = (hex: string) => {
  return new Color(hex)
}

export const rgb = (r: number, g: number, b: number) => {
  return fromRGB(r, g, b)
}

// Color Functions

/**
 * Lighten the color by the given percentage
 * 
 * @param color An instance of `Color`
 * @param percent A percentage between 0-100
 */
export const lighten = (color: Color, percent: number) => {
  return color.lighten(percent)
}

/**
 * Darken the color by the given percentage
 * 
 * @param color an instance of `Color`
 * @param percent 
 */
export const darken = (color: Color, percent: number) => {
  return color.darken(percent)
}

/**
 * Reduce the alpha by the given percentage
 * 
 * @param color An instance of `Color`
 * @param percent A percentage between 0-100
 */
export const fade = (color: Color, percent: number) => {
  return color.fade(percent)
}