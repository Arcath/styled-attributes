export class Color{
  hex: string
  alpha: number = 1

  constructor(hex: string){
    this.parseHex(hex)
  }

  parseHex(hex: string){
    switch(hex.length){
      case 3:
        this.hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
      break
      case 4:
        this.parseHex(hex.substr(1, 3))
      break
      case 6:
        this.hex = hex
      break
      case 7:
        this.parseHex(hex.substr(1, 6))
      break
      default:
        this.parseHex('000')
    }
  }

  toString(){
    if(this.alpha === 1){
      return '#' + this.hex
    }else{
      return `rgba(${this.r()}, ${this.g()}, ${this.b()}, ${this.alpha})`
    }
  }

  r(){
    return parseInt(this.hex.substr(0, 2), 16)
  }

  g(){
    return parseInt(this.hex.substr(2, 2), 16)
  }

  b(){
    return parseInt(this.hex.substr(4, 2), 16)
  }

  private hslData(){
    let r = this.r() / 255
    let g = this.g() / 255
    let b = this.b() / 255

    let colors = [
      r,
      g,
      b
    ]

    let min = colors.sort()[0]
    let max = colors.sort().reverse()[0]

    return {
      min,
      max,
      r,
      g,
      b
    }
  }

  h(){
    let {min, max, r, g, b} = this.hslData()

    switch(max){
      case r:
        return ((g - b) / (max - min)) * 60
      case g:
        return (2.0 + (b - r) / (max - min)) * 60
      case b:
        return (4.0 + (r - g) / (max - min)) * 60
    }
  }

  s(){
    let {min, max} = this.hslData()

    let l = (min + max) / 2

    if(l < 0.5){
      return ((max - min) / (max + min)) * 100
    }else{
      return ((max - min) / (2.0 - (max - min))) * 100
    }
  }

  l(){
    let {min, max} = this.hslData()

    let l = (min + max) / 2

    return (Math.round(l * 1000)) / 10
  }

  private shade(percent: number){
    let r = Math.min(
      this.r() * (percent / 100),
      255
    )
    let g = Math.min(
      this.g() * (percent / 100),
      255
    )
    let b = Math.min(
      this.b() * (percent / 100),
      255
    )

    return fromRGB(r, g, b)
  }

  lighten(percent: number){
    return this.shade(percent + 100)
  }

  darken(percent: number){
    return this.shade(0-(percent + 100))
  }

  fade(percent: number){
    let color = new Color(this.hex)
    color.alpha = this.alpha - (this.alpha * (percent / 100))

    return color
  }
}

export const fromRGB = (r: number, g: number, b: number) => {
  return new Color(r.toString(16) + g.toString(16) + b.toString(16))
}