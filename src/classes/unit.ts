export class Unit<T extends string>{
  value: number
  unit: T

  constructor(value: number, unit: T){
    this.value = value
    this.unit = unit
  }

  toString(){
    return this.toNumber() + this.unit
  }

  toNumber(){
    return this.value
  }

  valueOf(): number{
    return this.toNumber()
  }
}

export class PercentUnit extends Unit<'%'>{
  constructor(value: number){
    super(value / 100, '%')
  }

  toNumber(){
    return this.value * 100
  }
}