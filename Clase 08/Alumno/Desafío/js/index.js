var student = {
  firstName: 'Juan',
  lastName: 'Peréz',
  dni: 22999333,
  email: 'juan@gmail.com'
}

function createStudentNode (student) {
  var liNode = document.createElement('li')

  liNode.innerHTML =
    '<h1>' +
    student.firstName +
    ' ' +
    student.lastName +
    '</h1><h3>DNI:' +
    student.dni +
    '</h3><p>E-Mail: ' +
    student.email +
    '</p>'

  liNode.className = 'list-group-item'

  liNode.id = student.dni

  return liNode
}

var studentNode = createStudentNode(student)

console.log(studentNode)
