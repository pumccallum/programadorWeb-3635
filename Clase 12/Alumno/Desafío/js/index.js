var emailNode = $(email)

emailNode.blur(validateEmail)

function validateEmail (event) {
  var inputNode = $(this)

  var value = inputNode.val()

  if (value && value.indexOf('.') !== -1 && value.indexOf('@') !== -1) {
    inputNode.addClass('is-valid')
    inputNode.removeClass('is-invalid')
  } else {
    inputNode.addClass('is-invalid')
    inputNode.removeClass('is-valid')
  }
}
