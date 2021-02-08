const chai = require('chai')
const expect = chai.expect
const {iceWater} = require('../test/dummy-recipes')
const {cereal} = require('../test/dummy-recipes')
const RecipeRepository = require('../src/RecipeRepository')

describe('RecipeRepository', () => {
  it('should be a function', () => {
    expect(RecipeRepository).to.be.a('function')
  })

  it('should be a valid instance of the RecipeRepository Class', () => {
    const newRepo = new RecipeRepository ()
    expect(newRepo).to.be.an.instanceOf(RecipeRepository)
  })

  it('should be able to accurately store recipes', () => {
    const newRepo = new RecipeRepository (iceWater)
    expect(newRepo.recipeIndex).to.deep.equal(iceWater)
  })

  it('should be able to store any recipe', () => {
    const newRepo  = new RecipeRepository (cereal)
    expect(newRepo.recipeIndex).to.deep.equal(cereal)
  })
})