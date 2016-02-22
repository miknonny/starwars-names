var expect = require('chai').expect
var starWars = require('./index')

// Now we will use the global describle from mocha

/**
 * This is a simple assertion to make sure
 * our  test are running
 */
describe('starwars-library', function () {
  describe('all', function () {
    it('should be an array of strings', function () {
      expect(starWars.all).to.satisfy(isArrayOfString)

      function isArrayOfString (array) {
        return array.every(function (item) {
          return typeof item === 'string'
        })
      }
    })

    it ('should contain `Luke Skywalker`', function () {
      expect(starWars.all).to.include('Luke Skywalker')
    })
  })

  describe('random', function () {
    it('should be a function', function () {
      expect(starWars.random).to.satisfy(isAFunction)

      function isAFunction (functionToCheck) {
        var getType = {}
        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
      }
    })
    it ('should return a random item from starwars.all', function () {
      var randomItem = starWars.random()
      expect(starWars.all).to.include(randomItem)
    })
  })


})
