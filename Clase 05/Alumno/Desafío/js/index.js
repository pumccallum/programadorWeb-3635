

var oldStudent = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    email: 'juan@gmail.com'
  },
  {
    firstName: 'Ana',
    lastName: '',
    dni: 45678989,
    email: 'ana@gmail.com'
  },
  {
    firstName: '',
    lastName: 'Mármol',
    dni: 45678956,
    email: 'pedro@gmail.com'
  }

function Student (firstName, lastName, dni, email) {
  var id = Math.random()

  this.firstName = firstName
  this.lastName = lastName
  this.dni = dni
  this.email = email

  this.getId = function () {
    return id
  }

  this.fullName = function () {
    if (this.firstName && this.lastName) { //uso el this. por si se modifica mas adelante
      return this.firstName + ' ' + this.lastName
    } else if (!this.firstName && this.lastName) {
      return this.lastName
    } else if (this.firstName && !this.lastName) {
      return this.firstName
    } else {
      return ''
    }
  }
}

var student1 = new Student('Juan', 'Perez', 45678987, 'juan@gmail.com')

var id1 = student1.getId()
console.log(id1)

var fullName1 = student1.fullName()
console.log(fullName1)

var student2 = new Student('Ana', undefined, 45678989, 'ana@gmail.com')

var id2 = student2.getId()
console.log(id2)

var fullName2 = student2.fullName()
console.log(fullName2)

var student3 = new Student(undefined, 'Marmol', 45678956, 'pedro@gmail.com')

var id3 = student3.getId()
console.log(id3)

var fullName3 = student3.fullName()
console.log(fullName3)


var oldStudent

var newStudent

for (var i; i < oldStudent.length; i++) {
  oldStudent = oldStudents[i]
  newStudent=new Student()
}