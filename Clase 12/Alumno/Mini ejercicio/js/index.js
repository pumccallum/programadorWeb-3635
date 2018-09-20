// var text = $('#firstName')

// var changeText = $('.list-group-item')

// changeText.blur(newText)

// function newText (event) {
//   var inputNode = $(event.target)

//   for (var i = 0; i < inputNode.length; i++) {
//     inputNode[i].innerHTML = text.val()
//   }
//   //changeText.innerHTML = text.val()
// }

var inputText = $('#firstName')

inputText.blur(changeLi)

function changeLi (event) {
  var liNodes = $('li')
  var inputNode = $(event.target)
  var value = inputNode.val()

  liNodes.html(value)
}
