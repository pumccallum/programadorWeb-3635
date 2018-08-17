var gender = prompt('Indique su sexo (masculino, femenino, otro)')
var age = prompt('Indique su eded')

var message

switch (gender) {
  case 'masculino':
    message = 'Sr.'
    break
  case 'femenino':
    message = 'Sra.'
    break
  case 'otro':
    message = 'Sx.'
    break
  default:
    message = '(Sr./Sra./Sx.)'
}

if (age < 18) {
  message = message + ' usted es menor de edad, no puede ingresar.'
} else if (age >= 18) {
  message = message + ' usted es mayor de edad, puede ingresar.'
} else {
  message = message + ' su edad no ha sido ingresada correctamente'
}
console.log(message)
