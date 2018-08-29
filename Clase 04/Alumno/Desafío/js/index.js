function search (student) {
  var name

  for (var i = 0; i < student.length; i++) {
    name = student[i]
    
  }

  return -1
}

var name = prompt('Ingrese un nombre')

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

var message

if (name === search(studentsList)) {
  message =
    'Se ha encontrado a ' + name + ' en la posicion ' + 
} else {
  message = 'El nombre no existe'
}

console.log(message)
