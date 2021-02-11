const ingIndex = require('../test/dummy-recipes')

class User {
  constructor (person) {
    this.name = person.name
    this.id = person.id
    this.pantry = person.pantry
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
      if (recipe.ingNames(ingIndex).includes(targetIngredients)) {
        return recipe
      }
    })
  }
}

module.exports = User;

// Create classes and methods that can:

// Allow a user to favorite or unfavorite recipes (add to / remove from the user’s favoriteRecipes)

// Decide to cook a recipe that week (add to my recipesToCook)

// Filter my favoriteRecipes by one or more tags.

// Filter my favoriteRecipes by its name or ingredients.