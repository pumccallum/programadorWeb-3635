function prom (examResults) {
  var result
  var sum = 0

  for (var i = 0; i < examResults.length; i++) {
    result = examResults[i]

    sum = sum + result
  }

  var resultFinal = sum / examResults.length

  return resultFinal
}

var results = [ 7, 5, 6, 4, 3, 2, 8 ]

console.log(prom(results))
