const chai = require('chai')
const expect = chai.expect
const Ingredient = require('../src/Ingredient')

describe('Ingredient', () => {
  it('should be a function', () => {
    expect(Ingredient).to.be.a('function')
  })

  it('should be an instance of the Ingredient Class', () => {
    const newIng = new Ingredient ()
    expect(newIng).to.be.an.instanceOf(Ingredient)
  })

  it('should store a unique id', () => {
    const newIng = new Ingredient ({
      "id": 6511 
    })
    expect(newIng.id).to.deep.equal(6511)
  })

  it('should store a unique id as a number', () => {
    const newIng = new Ingredient ({
      "id": 8562
    })
    expect(newIng.id).to.be.a('number')
  })

  it('should store any unique id', () => {
    const newIng = new Ingredient ({
      "id": 7899
    })
    expect(newIng.id).to.deep.equal(7899)
  })

  it('should take any length of unique id', () => {
    const ing1 = new Ingredient ({
      "id": 386
    })
    const ing2 = new Ingredient ({
      "id": 4489566
    })
    expect(ing1.id).to.deep.equal(368)
    expect(ing1.id.length).to.deep.equal(3)
    expect(ing2.id).to.deep.equal(4489566)
    expect(ing2.id.length).to.deep.equal(7)
  })

  it('should store the ingredient name', () => {
    const newIng = new Ingredient ({
      "id": 894,
      "name": 'rolled oats'
    })
    expect(newIng.name).to.deep.equal('rolled oats')
  })

  it('should store the ingredient name as a string', () => {
    const newIng = new Ingredient ({
      "id": 894,
      "name": 'rolled oats'
    })
    expect(newIng.name).to.be.a('string')
  })

  it('should store any ingredient name', () => {
    const newIng = new Ingredient ({
      "id": 1156,
      "name" : 'sparkling water'
    })
    expect(newIng.name).to.deep.equal('sparkling water')
  })

  it('should store the ingredient price in cents', () => {
    const newIng = new Ingredient ({
      "id": 2569,
      "name": 'greek yogurt',
      "estimatedCostInCents": 115
    })
    expect(newIng.costPerUnit).to.deep.equal(115)
  })

  it('should store the ingredient price as a number', () => {
    const newIng = new Ingredient ({
      "id": 8974,
      "name": 'heavy cream',
      "estimatedCostInCents": 421
    })
    expect(newIng.costPerUnit).to.be.a('number')
  })

  it('should store any ingredient price in cents', () => {
    const newIng = new Ingredient ({
      "id": 6894,
      "name": 'gummy bears',
      "estimatedCostInCents": 261
    })
    expect(newIng.costPerUnit).to.deep.equal(261)
  })
})