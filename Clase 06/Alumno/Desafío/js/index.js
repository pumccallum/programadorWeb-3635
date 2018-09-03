function includesText (text1, text2) {
  if (typeof text1 === 'string' && typeof text2 === 'string') {
    var text1UpperCase = text1.toUpperCase()
    var text2UpperCase = text2.toUpperCase()

    if (text2UpperCase.indexOf(text1UpperCase) === -1) {
      return false
    } else {
      return true
    }
  } else {
    return false
  }
}

var search = prompt('Ingrese su busqueda')
var name = 'Patricia'

var result = includesText(search, name)
console.log(result)
