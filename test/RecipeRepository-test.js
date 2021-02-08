const chai = require('chai')
const expect = chai.expect
const RecipeRepository = require('../src/RecipeRepository')

describe('RecipeRepository', () => {
  it('should be a function', () => {
    expect(RecipeRepository).to.be.a('function')
  })

  it('should be a valid instance of the RecipeRepository Class', () => {
    const newRepo = new RecipeRepository ()
  })
})