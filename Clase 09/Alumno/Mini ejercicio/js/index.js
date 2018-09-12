var submitButton = document.getElementById('button')

submitButton.onclick = validateAge

function validateAge () {
  var ageNode = document.getElementById('age')

  var value = ageNode.value

  var parsedValue = parseInt(value, 10)

  if (isNaN(parsedValue)) {
    console.log('Valor invalido')
  } else if (parsedValue >= 18) {
    console.log('Usted es mayor de edad')
  } else {
    console.log('Usted es menor de edad')
  }
}
