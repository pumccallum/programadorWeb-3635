function deleteElement (index, array) {
  if (Array.isArray(array)) {
    var newNumbers = array.slice()
    newNumbers.splice(index, 1)
    return newNumbers
  }
}

var numbers = [ 1, 2, 3, 4, 5 ]

var result = deleteElement(2, numbers)
var result2 = deleteElement(3, numbers)

console.log(numbers)
console.log(result)
console.log(result2)
