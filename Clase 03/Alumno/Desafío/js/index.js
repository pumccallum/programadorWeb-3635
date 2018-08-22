var operation = prompt('Ingrese la operacion a realizar (sum, res, mul, div)')

var number1 = prompt('Ingrese el primer numero')

var parseNumber1 = parseFloat(number1, 10)

do {
  var number2 = prompt('Ingrese el segundo numero')
} while (number2 == 0 && operation === 'div')

var parseNumber2 = parseFloat(number2, 10)

switch (operation) {
  case 'sum':
    console.log('El resultado de su suma es ' + (parseNumber1 + parseNumber2))
    break
  case 'res':
    console.log('El resultado de su resta es ' + (parseNumber1 - parseNumber2))
    break
  case 'mul':
    console.log(
      'El resultado de su mulitplicacion es ' + parseNumber1 * parseNumber2
    )
    break
  case 'res':
    console.log('El resultado de su division es ' + parseNumber1 / parseNumber2)
    break
}
