var mailNode = document.getElementById('email')

mailNode.oninput = validateMail

var buttonNode = document.getElementById('button')

function validateMail (event) {
  var inputNode = event.target

  var value = inputNode.value

  if (value && value.indexOf('.') !== -1 && value.indexOf('@') !== -1) {
    inputNode.classList.add('is-valid')
    inputNode.classList.remove('is-invalid')
    buttonNode.disabled = false
  } else {
    inputNode.classList.add('is-invalid')
    inputNode.classList.remove('is-valid')
    buttonNode.disabled = true
  }
}
