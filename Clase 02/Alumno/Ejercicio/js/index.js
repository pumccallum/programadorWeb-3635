var day = prompt('Qué día es hoy?')

switch (day) {
  case 'Lunes':
  case 'Martes':
  case 'Miércoles':
  case 'Jueves':
  case 'Viernes':
    console.log('Es un  día habil')
    break
  case 'Sabado':
  case 'Domingo':
    console.log('Es fin de semana')
    break
  default:
    console.log('El día no existe')
}
