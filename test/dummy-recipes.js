const User = require('../src/User')
// const Pantry = require('../src/Pantry')
const RecipeRepository = require('../src/RecipeRepository')
const Recipe = require('../src/Recipe')
const Ingredient = require('../src/Ingredient')

const ice = new Ingredient ({
  "id": 9412,
  "name": "ice",
  "estimatedCostInCents": 35
})
const water = new Ingredient ({
  "id": 78334,
  "name": "water",
  "estimatedCostInCents": 15
})
const milk = new Ingredient ({
  "id": 365,
  "name": "milk",
  "estimatedCostInCents": 212
})
const boxCer = new Ingredient ({
  "id": 15,
  "name": "box cereal",
  "estimatedCostInCents": 138
})
const fruit = new Ingredient ({
  "id": 88512,
  "name": "fresh fruit",
  "estimatedCostInCents": 355
})

const ingIndex = [ice, water, milk, boxCer, fruit]

const iceWater = {
  "id": 896653,
  "image": "https://ak.picdn.net/shutterstock/videos/3344537/thumb/6.jpg",
  "ingredients": [{
    "id": 9412,
    "quantity": {
      "amount": 1,
      "unit": "c"
    }
  }, {
    "id": 78334,
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
    "id": 365,
    "quantity": {
      "amount": 2,
      "unit": "c"
    }
  }, {
    "id": 15,
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
const recJuice = new Recipe ({
  "id": 11598,
  "image": "https://i1.wp.com/www.gofooddy.com/wp-content/uploads/2017/09/mixed-fruit-juice.jpg?fit=960%2C539&ssl=1",
  "ingredients": [{
    "id": 9412,
    "quantity": {
      "amount": 1,
      "unit": "c"
    }
  }, {
    "id": 88512,
    "quantity": {
      "amount": 3,
      "unit": "c"
    }
  }],
  "instructions": [
    {
      "instruction": "Prepare a glass and fill with ice",
      "number": 1
    }, {
      "instruction": "Wash the fresh fruit with running water",
      "number": 2
    }, {
    "instruction": "Place fruit in a blender and blend on medium speed until liquified",
    "number": 3
    }, {
    "instruction": "Pour the blended fruit through a sieve to filter any remaining pulp into the glass with ice. Enjoy in midsummer",
    "number": 2
  }],
  "name": "Juice",
  "tags": [
    "drinks",
    "summer",
    "breakfast",
    "5 minute",
    "fruity"
  ]
})

const dummyRecipes = [recIceWater, recCereal, recJuice]

const dummyRepo = new RecipeRepository (dummyRecipes, ingIndex)

const daphne = {
  "name": "Daphne Bridgerton",
  "id": 13,
  "pantry": [
    {
      "ingredient": 15,
      "amount": 12
    },
    {
      "ingredient": 365,
      "amount": 4
    },
    {
      "ingredient": 78334,
      "amount": 10
    }
  ]
}

const simon = {
  "name": "Simon Basset",
  "id": 18,
  "pantry": [
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
  ]
}

const simonUser = new User(simon);
// simonUser.pantry = new Pantry (simonUser.pantry)
const daphneUser = new User(daphne);
const daphneClone = new User (daphne);

module.exports = {
  recIceWater,
  recCereal,
  recJuice,
  ingIndex,
  dummyRecipes,
  dummyRepo,
  daphne,
  simon,
  daphneUser,
  daphneClone,
  simonUser,
}
