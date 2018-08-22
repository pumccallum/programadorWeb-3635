var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]

var day

for (var i = 0; i < 6; i++) {
  day = daysOfTheWeek[i]
  console.log(day + ' es un dia habil')
}

for (var i = 6; i < 9; i++) {
  day = daysOfTheWeek[i]
  console.log(day + ' es fin de semana')
}

for (var i = 9; i < 10; i++) {
  day = daysOfTheWeek[i]
  console.log(day + ' no es un valor existente')

  // if (i === 9) {
  //   break
  // }
}
