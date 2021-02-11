class User {
  constructor (person, allIngredients) {
    this.name = person.name
    this.id = person.id
    this.pantry = person.pantry
    this.ingredientsIndex = allIngredients
    this.favoriteRecipes = []
    this.recipesToCook = []
  }

  addToFav (newFav) {
    this.favoriteRecipes.push(newFav)
  }

  removeFromFav (oldFav) {
    this.favoriteRecipes.splice(
      this.favoriteRecipes.indexOf(oldFav), 1)
  }

  addToCook (wanted) {
    this.recipesToCook.push(wanted)
  }

  favoritesByTag (targetTag) {
    return this.favoriteRecipes.filter(recipe => {
      if (recipe.tags.includes(targetTag)) {
        return recipe
      }
    })
  }

  favoritesByName (targetName) {
    return this.favoriteRecipes.filter(recipe => {
      if (recipe.name === targetName) {
        return recipe
      }
    })
  }
  
  favoritesByIngredients (targetIngredients) {
    return this.favoriteRecipes.filter(recipe => {
      return recipe.ingNames(this.ingredientsIndex).includes(targetIngredients)
    })
  }
}

module.exports = User;

// Filter my favoriteRecipes by one or more tags.