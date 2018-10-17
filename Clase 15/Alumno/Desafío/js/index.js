$(document).ready(function () {
  console.log('Init app')

  function getData (url, cbk) {
    $.ajax(url)
      .done(function (data) {
        cbk(null, data)
      })
      .fail(function (error) {
        cbk(error)
      })
  }

  var mainListNode = $('#mainList')

  var showMoreButton = $('#showMore')

  getData('https://swapi.co/api/peoplpe/', showPeople)

  function showPeople (error, data) {
    if (error) {
      console.log('Error ', error)
    } else {
      console.log('Los personajes son:', data)

      var peoples = data.results

      var people

      for (var i = 0; i < peoples.length; i++) {
        people = peoples[i]

        mainListNode.append(
          '<li class="list-group-item">' + people.name + '</li>'
        )
      }
      if (data.next) {
        showMoreButton.one('click', function () {
          getData(data.next, showPeople)
        })
      } else {
        showMoreButton.remove()
      }
    }
  }
})
