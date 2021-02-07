class Ingredient {
  constructor (rawIng) {
    this.id = rawIng.id
    this.name = rawIng.name
    this.costPerUnit = rawIng.estimatedCostInCents
  }
}

module.exports = Ingredient;