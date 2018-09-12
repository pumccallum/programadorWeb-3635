var nameNode = document.getElementById('firstName')

nameNode.onblur = validateName

function validateName (event) {
  var inputNode = event.target

  var value = inputNode.value

  if (value) {
    inputNode.classList.add('is-valid')
    inputNode.classList.remove('is-invalid')
  } else {
    inputNode.classList.add('is-invalid')
    inputNode.classList.remove('is-valid')
  }
}
