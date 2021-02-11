class RecipeRepository {
  constructor (allRecipes, allIngredients) {
    this.recipeIndex = allRecipes
    this.ingredientIndex = allIngredients
  }

  filterByTag (tag) {
    return this.recipeIndex.filter(recipe => {
      return recipe.tags.includes(tag)
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

module.exports = RecipeRepository;