class RecipeRepository {
  constructor (allRecipes, allIngredients) {
    this.recipeIndex = allRecipes
    this.ingredientIndex = allIngredients
  }

  filterByTag (tag) {
    return this.recipeIndex.filter(recipe => {
      if (recipe.tags.includes(tag)) {
        return recipe
      }
    })
  }

  filterByName (name) {
    return this.recipeIndex.filter(recipe => {
      if (recipe.name === name) {
        return recipe
      }
    })
  }

  filterByIng (ingredient) {
    return this.recipeIndex.filter(recipe => {
      if (recipe.ingNames(this.ingredientIndex)
        .includes(ingredient)) {
        return recipe
      }
    })
  }
}

module.exports = RecipeRepository;