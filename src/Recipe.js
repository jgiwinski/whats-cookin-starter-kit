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
    // const byName = []
    // this.ingredients.forEach(ing => {
    //   byName.push(ingredientsReference.find(entry => entry.id === ing.id).name)
    // })
    return this.ingredients.reduce((acc, ing) => {
      acc.push(ingredientsReference.find(entry => {entry.id === ing.id}).name)
    }, [])
  }

  calcCost (ingredientsReference) {

  }

  retInstructions () {
    return this.instructions
  }
}

module.exports = Recipe;

// It should have methods to:
// * Determine the names of ingredients needed
// * Get the cost of its ingredients
// * Return its directions / instructions