function Car (model, brand, year) {
  var id = Math.random()

  this.model = model
  this.brand = brand
  this.year = year

  this.getCarName = function () {
    var textCarData = this.model + ', ' + this.brand + ', ' + this.year
    return textCarData
  }
}

var car1 = new Car('Suran', 'Volkswagen', 2015)

console.log(car1.getCarName())

var car2 = new Car('Audi TT', 'Audi', 2017)

console.log(car2.getCarName())

var car3 = new Car('Gran Turismo', 'Maserati', 2018)

console.log(car3.getCarName())
