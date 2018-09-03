var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]

function search (name, studentsList) {
  var student

  for (var i = 0; i < studentsList.length; i++) {
    student = studentsList[i]
    if (name === student.firstName || name === student.lastName) {
      return i
    }
  }
  return -1
}

var name = prompt('Ingrese un nombre')

var result = search(name, studentsList)

if (result !== -1) {
  console.log('Se ha encontrado a ' + name + ' en la posicion ' + result)
} else {
  console.log('El usuario ' + name + ' no existe')
}
