const Pantry = require('./Pantry');

class User {
  constructor (person, repository) {
    this.name = person.name
    this.id = person.id
    this.pantry = new Pantry(person.pantry)
    this.repository = repository || {}
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

  favoritesByTag () {
    const tagsInput = Object.values(arguments)
    let tagStack = tagsInput.reduce((ret, tag) => {
      if (tagsInput.indexOf(tag) === tagsInput.length - 1) {
        ret += `'${tag}'`
      } else {
        ret += `'${tag}' && `
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
    if(this.hasAllIng(recipe)){
      removeIngFromPantry(recipe);
    } else {
      return `Sorry, looks like you don't have enough ingredients to make ${recipe.name}.`
    }
  }
}

module.exports = User;
