const chai = require('chai')
const expect = chai.expect
const RecipeRepository = require('../src/RecipeRepository')
const {
  recIceWater,
  recCereal,
  ingIndex
} = require('../test/dummy-recipes')

describe('RecipeRepository', () => {
  it('should be a function', () => {
    expect(RecipeRepository).to.be.a('function')
  })

  it('should be a valid instance of the RecipeRepository Class', () => {
    const newRepo = new RecipeRepository ()
    expect(newRepo).to.be.an.instanceOf(RecipeRepository)
  })

  it('should be able to accurately store recipes', () => {
    const newRepo = new RecipeRepository (recIceWater)
    expect(newRepo.recipeIndex).to.deep.equal(recIceWater)
  })

  it('should be able to store any recipe', () => {
    const newRepo  = new RecipeRepository (recCereal)
    expect(newRepo.recipeIndex).to.deep.equal(recCereal)
  })

  it('should be able to store many recipes', () => {
    const newRepo = new RecipeRepository ([recIceWater, recCereal])
    expect(newRepo.recipeIndex).to.deep.equal([recIceWater, recCereal])
  })

  it('should be able to filter recipes by tag', () => {
    const newRepo = new RecipeRepository ([recIceWater, recCereal])
    expect(newRepo.filterByTag(drinks)).to.deep.equal([recIceWater])
  })

  it('should be able to filter recipes by any tag', () => {
    const newRepo = new RecipeRepository ([recIceWater, recCereal])
    expect(newRepo.filterByTag(breakfast)).to.deep.equal([recCereal])
  })

  it('should be able to filter recipes by name', () => {
    const newRepo = new RecipeRepository ([recIceWater, recCereal])
    expect(newRepo.filterByName('ice water')).to.deep.equal([recIceWater])
  })

  it('should be able to filter recipes by any name', () => {
    const newRepo = new RecipeRepository ([recIceWater, recCereal])
    expect(newRepo.filterByName('cereal')).to.deep.equal([recCereal]) 
  })

  it('should be able to filter recipes by ingredient', () => {
    const newRepo = new RecipeRepository ([recIceWater, recCereal])
    expect(newRepo.filterByIng('water')).to.deep.equal([recIceWater])
  })

  it('should be able to filter recipes by any ingredient', () => {
    const newRepo = new RecipeRepository ([recIceWater, recCereal])
    expect(newRepo.filterByIng('milk')).to.deep.equal([recCereal])
  })
})