class RecipeRepository {
  constructor (allRecipes) {
    this.recipeIndex = allRecipes
  }
}

module.exports = RecipeRepository;

// It should have a parameter to take in recipe data.
// It should have methods to determine:
//  * A filtered list of recipes based on one or more tags.
//  * A filtered list of recipes based on its name or ingredients.