var clickNode = $('.square')

var player = true

clickNode.click(circleOrCross)

function circleOrCross () {
  var squareNode = $(this)

  if (!squareNode.hasClass('cross') && !squareNode.hasClass('circle')) {
    if (player) {
      squareNode.addClass('cross')
      player = false
    } else {
      squareNode.addClass('circle')
      player = true
    }
  }
}
