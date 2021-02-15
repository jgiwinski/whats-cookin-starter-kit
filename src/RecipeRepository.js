class RecipeRepository {
  constructor (allRecipes, allIngredients) {
    this.recipeIndex = allRecipes
    this.ingredientIndex = allIngredients
  }

  filterByTag () {
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

  filterByName (name) {
    return this.recipeIndex.filter(recipe => {
      return recipe.name === name ? true : false
    })
  }

  filterByIng (ingredient) {
    return this.recipeIndex.filter(recipe => {
      return recipe.ingNames(this.ingredientIndex).includes(ingredient)
    })
  }
}

if (typeof module !== 'undefined') {
  module.exports = someClassName;
}
