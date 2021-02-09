const Recipe = require('../src/Recipe')
const Ingredient = require('../src/Ingredient')

const ice = new Ingredient ({
  "id": 00002,
  "name": "ice",
  "estimatedCostInCents": 35
})
const water = new Ingredient ({
  "id": 0003,
  "name": "water",
  "estimatedCostInCents": 15
})
const milk = new Ingredient ({
  "id": 0365,
  "name": "milk",
  "estimatedCostInCents": 212
})
const boxCer = new Ingredient ({
  "id": 1567,
  "name": "box cereal",
  "estimatedCostInCents": 138
})

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

const recIceWater = new Recipe (iceWater)

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

const recCereal = new Recipe (cereal)

module.exports = {
  recIceWater,
  recCereal,
  ingIndex
}