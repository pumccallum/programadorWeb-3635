.keydown(function (event) {
  var key = $(this)
  var h1Node = $('counter')
  var value = h1Node.val()

  switch (event.which) {
    case 13:
      h1Node.html(0)
      break

    case 38:
      h1Node.html(value + 1)
      break

    case 40:
      h1Node.html(value - 1)
      break

    default:
      break
  }
})
