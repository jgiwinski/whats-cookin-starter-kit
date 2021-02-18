class User {
  constructor (person, repository) {
    this.name = person.name
    this.id = person.id
    this.pantry = person.pantry
    this.repository = repository || {}
    this.onFavorites = false
    this.favoriteRecipes = []
    this.recipesToCook = []
  }

  addToFav (newFav) {
    if (!this.favoriteRecipes.includes(newFav)) {
      this.favoriteRecipes.push(newFav)
    }
  }

  removeFromFav (oldFav) {
    if (this.favoriteRecipes.includes(oldFav)) {
      this.favoriteRecipes.splice(
        this.favoriteRecipes.indexOf(oldFav), 1)
    }
  }

  addToCook (wanted) {
    if (!this.recipesToCook.includes(wanted)) {
      this.recipesToCook.push(wanted)
    }
  }

  favoritesByTag (tagsInput) {
    let tagStack = tagsInput.reduce((ret, tag) => {
      if (tagsInput.indexOf(tag) === tagsInput.length - 1) {
        ret += `'${tag}'`
      } else {
        ret += `'${tag}' || `
      }
      return ret
    }, '')
    return this.favoriteRecipes.filter(recipe => {
      return recipe.tags.includes(eval(tagStack))
    })
  }

  favoritesByName (targetName) {
    return this.favoriteRecipes.filter(recipe => {
      return recipe.name === targetName
    })
  }

  favoritesByIngredients (targetIngredient) {
    return this.favoriteRecipes.filter(recipe => {
      return recipe.ingNames(this.repository.ingredientIndex).includes(targetIngredient)
    })
  }

  cookRecipe(recipe) {
    if (this.pantry.hasAllIng(recipe)) {
      this.pantry.removeIngFromPantry(recipe);
    } else {
      return `Sorry, looks like you don't have enough ingredients to make ${recipe.name}.`
    }
  }
}

module.exports = User;