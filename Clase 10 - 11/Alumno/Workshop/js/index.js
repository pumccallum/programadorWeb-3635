console.log('Init app')

// Globales

var LOCAL_KEY = 'studentList'

// Carga inicial

var studentsList = getLocalList(LOCAL_KEY)

var mainListNode = document.getElementById('mainList')

var student

for (var i = 0; i < studentsList.length; i++) {
  student = createStudentNode(studentsList[i])

  mainListNode.appendChild(student)
}

// Validar los campos nombre y dni

var firstNameNode = document.getElementById('firstName')

firstNameNode.onblur = validateRequiredField

var dniNode = document.getElementById('dni')

dniNode.onblur = validateDniField

var lastNameNode = document.getElementById('lastName')

lastNameNode.onblur = validateRequiredField

var emailNode = document.getElementById('email')

emailNode.onblur = validateEmailField

// Agregar el estudiante

var addStudentButtonNode = document.getElementById('addStudentButton')

addStudentButtonNode.onclick = addStudent

function addStudent () {
  var firstNameValue = firstNameNode.value
  var dniValue = dniNode.value
  var lastNameValue = lastNameNode.value
  var emailValue = emailNode.value

  var student = {
    firstName: firstNameValue,
    lastName: lastNameValue,
    dni: dniValue,
    email: emailValue
  }

  studentsList.push(student)

  setLocalList(LOCAL_KEY, studentsList)

  student = createStudentNode(student)

  mainListNode.appendChild(student)

  firstName.value = ''
  lastName.value = ''
  dniNode.value = ''
  email.value = ''
  addStudentButtonNode.disabled = true
  firstName.classList.remove('is-valid')
  lastName.classList.remove('is-valid')
  dniNode.classList.remove('is-valid')
  email.classList.remove('is-valid')
}

// Validar dni

var deleteDniNode = document.getElementById('deleteDni')

deleteDniNode.oninput = validateDeleteDniField

var deleteStudentButtonNode = document.getElementById('deleteStudentButton')

deleteStudentButtonNode.onclick = deleteStudent

function validateDeleteDniField (event) {
  var inputNode = event.target

  //var parsedValue = parseInt(inputNode.value, 10)

  var index = searchStudentIndexByDni(inputNode.value, studentsList)

  //if (isNaN(parsedValue) || parsedValue <= 0 || index > -1) {
  if (index > -1) {
    deleteStudentButtonNode.disabled = false
  } else {
    deleteStudentButtonNode.disabled = true
  }
}

function deleteStudent () {
  var inputNode = document.getElementById('deleteDni')
  var index = searchStudentIndexByDni(inputNode.value, studentsList)

  if (index !== -1) {
    studentsList.splice(index, 1)
    console.log(studentsList)
  }

  setLocalList(LOCAL_KEY, studentsList)

  student = document.getElementById(inputNode.value)

  mainListNode.removeChild(student)
}

//Buscar estudiante

var searchStudentButtonNode = document.getElementById('searchStudentButton')

searchStudentButtonNode.onclick = searchStudent

function searchStudent (event) {
  var searchStudentNode = document.getElementById('searchText')
  var searchListNode = document.getElementById('searchList')

  var index = searchStudentIndexByText(searchStudentNode.value, studentsList)

  var student = studentsList[index]

  searchListNode.innerHTML = ''

  if (student) {
    var studentNode = createStudentNode(student)

    searchListNode.appendChild(studentNode)
  }

  //console.log(studentsList[index])
}

function searchStudentIndexByText (text, studentsList) {
  var student

  for (var i = 0; i < studentsList.length; i++) {
    student = studentsList[i]
    if (
      includesText(text, student.firstName) ||
      includesText(text, student.lastName)
    ) {
      return i
    }
  }

  return -1
}

function includesText (text, baseText) {
  // Valido que ambos parámetros sean string
  if (typeof text === 'string' && typeof baseText === 'string') {
    // Verifico si el primer parámetro se encuentra dentro del segundo
    var textUpperCase = text.toUpperCase()
    var baseTextUpperCase = baseText.toUpperCase()
    if (baseTextUpperCase.indexOf(textUpperCase) !== -1) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

// Funciones auxiliares

function searchStudentIndexByDni (dni, studentsList) {
  var student

  for (var i = 0; i < studentsList.length; i++) {
    student = studentsList[i]
    if (dni === student.dni) {
      return i
    }
  }

  return -1
}

function validateEmailField (event) {
  var inputNode = event.target

  var value = inputNode.value

  if (value && value.indexOf('.') !== -1 && value.indexOf('@') !== -1) {
    inputNode.classList.add('is-valid')
    inputNode.classList.remove('is-invalid')
  } else {
    inputNode.classList.add('is-invalid')
    inputNode.classList.remove('is-valid')
  }
  validateSubmitButton()
}

function validateDniField (event) {
  var inputNode = event.target

  var parsedValue = parseInt(inputNode.value, 10)

  var index = searchStudentIndexByDni(inputNode.value, studentsList)

  if (isNaN(parsedValue) || parsedValue <= 0 || index > -1) {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }
  validateSubmitButton()
}

function validateRequiredField (event) {
  var inputNode = event.target

  if (!inputNode.value) {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }

  validateSubmitButton()
}

function validateSubmitButton () {
  var addStudentButtonNode = document.getElementById('addStudentButton')
  var inputFields = document.getElementsByClassName('is-valid')

  if (inputFields.length === 4) {
    addStudentButtonNode.disabled = false
  } else {
    addStudentButtonNode.disabled = true
  }
}

function createStudentNode (newStudent) {
  // Creo el nodo li
  var liNode = document.createElement('li')

  // Le setteo el id al nodo
  liNode.id = newStudent.dni

  // Le setteo la clase al nodo
  liNode.className = 'list-group-item'

  // Le agrego el contenido al nodo
  liNode.innerHTML =
    '<h1>' +
    newStudent.firstName +
    ' ' +
    newStudent.lastName +
    '</h1>' +
    '<h3>DNI:' +
    newStudent.dni +
    '</h3><p class="pepe">E-mail:' +
    newStudent.email +
    '</p>'

  // Devuelvo solo el nodo con todos sus datos
  return liNode
}

function setLocalList (key, list) {
  // Verifico los parámetros recibidos
  if (typeof key === 'string' && Array.isArray(list)) {
    // Convierto a JSON el array
    var strList = JSON.stringify(list)
    // Guardo en el localStorage pisando la key
    localStorage.setItem(key, strList)
  }
}

function getLocalList (key) {
  // Valido que reciba un string
  if (typeof key === 'string') {
    // Trato de recuperar la lista del localStorage
    var localList = localStorage.getItem(key)
    if (localList) {
      // Si la lista existía la tranformo en JavaScript y la devuelvo
      var parsedList = JSON.parse(localList)
      return parsedList
    } else {
      // Sino existía devuelvo un array vacío
      return []
    }
  }
}
