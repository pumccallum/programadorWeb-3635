function setLocalList (key, array) {
  if (typeof key === 'string' && Array.isArray(array)) {
    var stringyTestList = JSON.stringify(array)

    localStorage.setItem(key, stringyTestList)
  }
}

var testList = [ 'CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS' ]

setLocalList('studentsList', testList)

// setLocalList('studentsList', [ 1, 2, 3, 4 ])

// setLocalList(5, testList)

// setLocalList('studentsList', { name: 'Pepe' })
