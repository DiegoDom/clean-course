interface Fruit {
  color: string
  name: string
}

;(() => {
  const fruits = new Map<string, Fruit>([
    ['manzana', { color: 'red', name: 'manzana' }],
    ['cereza', { color: 'red', name: 'cereza' }],
    ['ciruela', { color: 'red', name: 'ciruela' }],
    ['fresa', { color: 'red', name: 'fresa' }],
    ['piña', { color: 'yellow', name: 'piña' }],
    ['banana', { color: 'yellow', name: 'banana' }],
    ['moras', { color: 'purple', name: 'moras' }],
    ['uvas', { color: 'purple', name: 'uvas' }],
  ])

  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  function isRedFruit(name: string): boolean {
    const fruit = fruits.get(name)

    return fruit && fruit.color === 'red' ? true : false
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores
  function getFruitsByColor(color: string): string[] {
    const result = new Map(
      [...fruits].filter(([_key, fruit]) => fruit.color === color),
    )

    if (!result.size) throw Error('the color must be: red, yellow, purple')

    return Array.from(result.keys())
  }

  // Simplificar esta función
  let isFirstStepWorking = true
  let isSecondStepWorking = true
  let isThirdStepWorking = true
  let isFourthStepWorking = true

  function workingSteps() {
    if (!isFirstStepWorking) return 'First step broken.'

    if (!isSecondStepWorking) return 'Second step broken.'

    if (!isThirdStepWorking) return 'Third step broken.'

    return isFourthStepWorking ? 'Working properly!' : 'Fourth step broken.'
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }) // true
  console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }) // false

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor('red') }) // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor('yellow') }) // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor('purple') }) // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') }) // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }) // Cambiar los valores de la línea 31 y esperar los resultados
})()
