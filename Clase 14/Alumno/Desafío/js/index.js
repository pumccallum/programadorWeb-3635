$(document).ready(function () {
  console.log('Init app')

  $('.btn').click(function () {
    var buttonId = $(this).parent().parent()

    var id = buttonId.attr('id')

    removeElementWithAnimation(id)
  })
})

function removeElementWithAnimation (id) {
  $('#' + id).fadeOut(300, function () {
    $(this).remove()
  })
}
