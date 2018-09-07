var texts = [ 'Ed', 'Edd', 'Eddy' ]

var liNode = document.createElement('li')

liNode.innerHTML = texts

var listNode = document.getElementById('mainList')

var text

for (var i = 0; i < texts.length; i++) {
  text = texts[i]

  var textNodeLi = document.createElement('li')

  textNodeLi.innerHTML = text

  textNodeLi.className = 'list-group-item'

  listNode.appendChild(textNodeLi)
}
