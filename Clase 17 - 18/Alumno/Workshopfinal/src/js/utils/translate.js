function genderTranslate (gender) {
  switch (gender) {
    case 'male':
      return 'masculino'
      break
    case 'female':
      return 'femenino'
      break
    case 'hermaphrodite':
      return 'hermafrodita'
      break
    case 'n/a':
      return 'n/a'
    default:
      return gender
      break
  }
}

var TRANSLATES = {
  ES: {
    blue: 'Azul',
    yellow: 'Amarillo',
    red: 'Rojo',
    brown: 'Marrón',
    'blue-gray': 'Azul grisaceo',
    black: 'Negro',
    orange: 'Naranja',
    hazel: 'Avellana',
    pink: 'Rosa',
    'red, blue': 'Rojo, azul',
    unknown: 'Indefinido',
    gold: 'Dorado',
    'green, yellow': 'Verde, amarillo',
    white: 'Blanco',
    dark: 'Oscuros'
  },
  EN: {
    blue: 'Blue',
    yellow: 'Yellow',
    red: 'red',
    brown: 'Brown',
    'blue-gray': 'Blue-gray',
    black: 'Black',
    orange: 'Orange',
    hazel: 'Hazel',
    pink: 'Pink'
  },

  PT: {
    blue: 'Azul',
    yellow: 'Amarelo',
    red: 'Vermelho',
    brown: 'Castanho',
    'blue-gray': 'Azul cinza',
    black: 'Preto',
    orange: 'Orange',
    hazel: 'Avelã',
    pink: 'Rosa'
  }
}

function eyeTranslate (lang, eyeColor) {
  return TRANSLATES[lang][eyeColor] || eyeColor
}

// function eyeColorTranslate (eye_color) {
//   switch (eye_color) {
//     case 'blue':
//       return 'azul'
//       break
//     case 'yellow':
//       return 'amarillo'
//       break
//     case 'red':
//       return 'rojo'
//       break
//     case 'brown':
//       return 'marron'
//       break
//     case 'blue-gray':
//       return 'azul grisaceo'
//       break
//     default:
//       return eye_color
//       break
//   }
// }

export { genderTranslate, eyeTranslate }
