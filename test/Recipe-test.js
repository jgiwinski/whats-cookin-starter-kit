const chai = require('chai')
const expect = chai.expect
const Recipe = require('../src/Recipe')
const Ingredient = require('../src/Ingredient')

const ice = {
  "id": 00002,
  "name": "ice",
  "estimatedCostInCents": 35
}
const water = {
  "id": 0003,
  "name": "water",
  "estimatedCostInCents": 15
}
const milk = {
  "id": 0365,
  "name": "milk",
  "estimatedCostInCents": 212
}
const boxCer = {
  "id": 1567,
  "name": "box cereal",
  "estimatedCostInCents": 138
}

const ingIndex = [ice, water, milk, boxCer]

const iceWater = {
  "id": 896653,
  "image": "https://ak.picdn.net/shutterstock/videos/3344537/thumb/6.jpg",
  "ingredients": [{
    "id": 00002,
    "quantity": {
      "amount": 1,
      "unit": "c"
    }
  }, {
    "id": 0003,
    "quantity": {
      "amount": 0.5,
      "unit": "c"
    }
  }],
  "instructions": [
    {
      "instruction": "Prepare a glass and fill with ice",
      "number": 1
    }, {
      "instruction": "Pour water into the glass and enjoy",
      "number": 2
  }],
  "name": "Ice Water",
  "tags": [
    "drinks",
    "summer"
  ]
}

const cereal = {
  "id": 567724,
  "image": "https://ak.picdn.net/shutterstock/videos/3344537/thumb/6.jpg",
  "ingredients": [{
    "id": 0365,
    "quantity": {
      "amount": 2,
      "unit": "c"
    }
  }, {
    "id": 1567,
    "quantity": {
      "amount": 12,
      "unit": "oz"
    }
  }],
  "instructions": [{
    "instruction": "Pour cereal",
    "number": 1
  }, {
    "instruction": "Pour milk into cereal",
    "number": 2
  }, {
    "instruction": "Grab a spoon and dig in",
    "number": 3
  }],
  "name": "Cereal",
  "tags": [
    "breakfast",
    "5 minute",
  ]
}

describe('Recipe', () => {
  it('should be a function', () => {
    expect(Recipe).to.be.a('function')
  })

  it('should be an instance of a Recipe', () => {
    const newRec = new Recipe (iceWater)
    expect(newRec).to.be.an.instanceOf(Recipe)
  })

  it('should store a unique id', () => {
    const newRec = new Recipe (iceWater)
    expect(newRec.id).to.deep.equal(iceWater.id)
  })

  it('should be able to store any id', () => {
    const newRec = new Recipe (cereal)
    expect(newRec.id).to.deep.equal(cereal.id)
  })

  it('should be able to store an image address', () => {
    const newRec = new Recipe (iceWater)
    expect(newRec.image).to.deep.equal(iceWater.image)
  })

  it('should be able to store any image address', () => {
    const newRec = new Recipe (cereal)
    expect(newRec.image).to.deep.equal(cereal.image)
  })

  it('should be able to accurately store ingredients', () => {
    const newRec = new Recipe (iceWater)
    expect(newRec.ingredients).to.deep.equal(iceWater.ingredients)
  })

  it('should be able to store any ingredients', () => {
    const newRec = new Recipe (cereal)
    expect(newRec.ingredients).to.deep.equal(cereal.ingredients)
  })

  it('should be able to accurately store instructions', () => {
    const newRec = new Recipe (iceWater)
    expect(newRec.instructions).to.deep.equal(iceWater.instructions)
  })

  it('should be able to store any instructions', () => {
    const newRec = new Recipe (cereal)
    expect(newRec.instructions).to.deep.equal(cereal.instructions)
  })

  it('should be able to store a name', () => {
    const newRec = new Recipe (iceWater)
    expect(newRec.name).to.deep.equal(iceWater.name)
  })

  it('should be able to store any name', () => {
    const newRec = new Recipe (cereal)
    expect(newRec.name).to.deep.equal(cereal.name)
  })

  it('should be able to store tags', () => {
    const newRec = new Recipe (iceWater)
    expect(newRec.tags).to.deep.equal(iceWater.tags)
  })

  it('should be able to store any tags', () => {
    const newRec = new Recipe (cereal)
    expect(newRec.tags).to.deep.equal(cereal.tags)
  })

  describe('ingNames method', () => {
    it('should be able to return all ingredients by name', () => {
      const newRec = new Recipe (iceWater)
      expect(newRec.ingNames(ingIndex)).to.deep.equal(['ice', 'water'])
    })

    it('should be able to return any ingredients by name', () => {
      const newRec = new Recipe (cereal)
      expect(newRec.ingNames(ingIndex)).to.deep.equal(['milk',  'box cereal'])
    })
  })

  describe('calcCost method', () => {
    it('should be able to calculate the total cost of the recipe', () => {
      const newRec = new Recipe (iceWater)
      expect(newRec.calcCost(ingIndex)).to.deep.equal(43)
    })

    it('should be able to do the same with any recipe', () => {
      const newRec = new Recipe (cereal)
      expect(newRec.calcCost(ingIndex)).to.deep.equal(2080)
    })
  })

  describe('retInstructions method', () => {
    it('should be able to accurately return all instructions', () => {
      const newRec = new Recipe (iceWater)
      expect(newRec.retInstructions()).to.deep.equal(iceWater.instructions)
    })
  })
})