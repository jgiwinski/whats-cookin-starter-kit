const { use } = require('chai')
const chai = require('chai')
const expect = chai.expect
const User = require('../src/User')
const {
  daphne,
  simon,
  recIceWater,
  recCereal,
  recJuice,
  // ingIndex
} = require('./dummy-recipes')

describe('User', () => {
  it('should be a function', () => {
    expect(User).to.be.a('function')
  })

  it('should be a valid instance of the User class', () => {
    const newU = new User (daphne)
    expect(newU).to.be.an.instanceOf(User)
  })

  it('should have a name', () => {
    const newU = new User (daphne)
    expect(newU.name).to.deep.equal('Daphne Bridgerton')
  })

  it('should be able to store any name', () => {
    const newU = new User (simon)
    expect(newU.name).to.deep.equal('Simon Basset')
  })

  it('should have an id', () => {
    const newU = new User (daphne)
    expect(newU.id).to.deep.equal(13)
  })

  it('should be able to have any id', () => {
    const newU = new User (simon)
    expect(newU.id).to.deep.equal(18)
  })

  it('should have a pantry', () => {
    const newU = new User (daphne)
    expect(daphne.pantry).to.deep.equal([
      {
        "ingredient": 15,
        "amount": 4
      },
      {
        "ingredient": 365,
        "amount": 4
      },
      {
        "ingredient": 78334,
        "amount": 10
      }
    ])
  })

  it('should be able to store any ingredient in the pantry', () => {
    const newU = new User (simon)
    expect(newU.pantry).to.deep.equal([
      {
        "ingredient": 9412,
        "amount": 4
      },
      {
        "ingredient": 15,
        "amount": 24
      },
      {
        "ingredient": 365,
        "amount": 10
      }
    ])
  })

  it('should be abble to store favorite recipes', () => {
    const newU = new User (daphne)
    expect(daphne.favoriteRecipes).to.deep.equal([])
  })

  it('should start off with no favorite recipes', () => {
    const newU = new User (daphne)
    expect(daphne.favoriteRecipes.length).to.deep.equal(0)
  })

  it('should be able to accurately store a recipe in favorites', () => {
    const newU = new User (daphne)
    daphne.addToFav(recIceWater)
    expect(newU.favoriteRecipes).to.deep.equal([recIceWater])
  })

  it('should be able to accurately store any recipe in favorites', () => {
    const newU = new User (daphne)
    daphne.addToFav(recCereal)
    expect(newU.favoriteRecipes).to.deep.equal([recCereal])
    daphne.addToFav(recIceWater)
    expect(newU.favoriteRecipes).to.deep.equal([recCereal, recIceWater])

    const secU = new User (simon)
    simon.addToFav(recJuice)
    expect(secU.favoriteRecipes).to.deep.equal([recJuice])
  })

  it('should be able to accurately remove a recipe from favorites', () => {
    const newU = new User (daphne)
    daphne.addToFav(recIceWater)
    daphne.addToFav(recCereal)
    daphne.addToFav(recJuice)

    daphne.removeFromFav(recCereal)
    expect(newU.favoriteRecipes).to.deep.equal([recIceWater, recJuice])

    daphne.addToFav(recCereal)
    newU.removeFromFav(recIceWater)
    expect(newU.favoriteRecipes).to.deep.equal([recJuice, recCereal])

    newU.removeFromFav(recCereal)
    expect(newU.favoriteRecipes).to.deep.equal([recJuice])
  })

  it('should be able to store recipes a user wishes to cook', () => {
    const newU = new User (daphne)
    expect(newU.recipesToCook).to.deep.equal([])
  })

  it('should start with no recipes to cook', () => {
    const newU = new User (daphne)
    expect(newU.recipesToCook.length).to.deep.equal(0)
  })

  it('should be able to add recipes to the to cook list', () => {
    const newU = new User (daphne)
    daphne.addToCook(recIceWater)
    expect(newU.recipesToCook).to.deep.equal([recIceWater])
  })

  it('should be able to add any recipe to the to cook list', () => {
    const newU = new User (daphne)
    daphne.addToCook(recJuice)
    expect(newU.recipesToCook).to.deep.equal([recJuice])

    const secU = new User (simon)
    simon.addToCook(recCereal)
    expect(secU.recipesToCook).to.deep.equal([recCereal])
  })


  it('should be able to filter favorites by tag', () => {
    const newU = new User (daphne)
    daphne.addToFav(recIceWater)
    daphne.addToFav(recCereal)
    daphne.addToFav(recJuice)
    expect(newU.favoritesByTag('drinks')).to.deep.equal()
  })

  it('should be able to filter favorites by name', () => {
    const newU = new User (daphne)
    daphne.addToFav(recIceWater)
    daphne.addToFav(recCereal)
    daphne.addToFav(recJuice)
    expect(newU.favoritesByName('Cereal'))
  })

  it('should be able to filter favorites by ingredients', () => {
    const newU = new User (daphne)
    daphne.addToFav(recIceWater)
    daphne.addToFav(recCereal)
    daphne.addToFav(recJuice)
    expect(newU.favoritesByIngredients('fresh fruit'))
  })
})