class Recipe {
  constructor (rawRec) {
    this.id = rawRec.id
    this.image = rawRec.image
    this.ingredients = rawRec.ingredients
    this.instructions = rawRec.instructions
    this.name = rawRec.name
    this.tags = rawRec.tags
  }

  ingNames (ingredientsReference) {
    const byName = []
    this.ingredients.forEach(ing => {
      byName.push(ingredientsReference.find(entry => entry.id === ing.id).name)
    })
    return byName
  }

  calcCost (ingredientsReference) {
    const state = []
    this.ingredients.forEach(ing => {
      state.push(
        (ing.quantity.amount) * (ingredientsReference.find(entry => entry.id === ing.id).costPerUnit)
      )
    })
    return Math.ceil(state
      .reduce((total, idv) => total + idv))
  }

  retInstructions () {
    return this.instructions
  }
}

if (typeof module !== 'undefined') {
  module.exports = someClassName;
}
