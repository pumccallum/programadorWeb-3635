setTimeout(function () {
  var newTitle = prompt('Ingresa un titulo')
  var newText = prompt('Ingresa un texto')

  var titleNode = document.getElementById('title')
  var textNode = document.getElementById('text')

  titleNode.innerHTML = newTitle
  textNode.innerHTML = newText
}, 2000)
