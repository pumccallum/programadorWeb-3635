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
    if (firstName && lastName) {
      return firstName + ' ' + lastName
    } else if (!firstName && lastName) {
      return lastName
    } else if (firstName && !lastName) {
      return firstName
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
