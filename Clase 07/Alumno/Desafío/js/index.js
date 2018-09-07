function getLocalList (key) {
  if (key === 'string') {
    var savedLocalStorage = localStorage.getItem(key)

    if (savedLocalStorage) {
      return JSON.parse(savedLocalStorage)
    } else {
      return []
    }
  } else {
    return []
  }
}

var studentsList = getLocalList('studentsList')

console.log(studentsList)
