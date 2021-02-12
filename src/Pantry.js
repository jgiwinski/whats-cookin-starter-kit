class Pantry {
  constructor(user) {
    this.userPantry = user.pantry;
    this.recipe = user.recipesToCook;
    this.shoppingList = [];
  }

  hasAllIng(ingList) {
    // if each ing on ingList is included in recipe return true
    // else return false
  }

  findMissingIng(recipe) {
    let userIng = this.userPantry.map(allUserIng => {
      return allUserIng.ingredient;
    });
    let missingIng = recipe.ingredients.filter(ing => {
      return !userIng.includes(ing.id)
    });
    return missingIng;
  }

  addtoShoppingList(ing) {
    this.shoppingList.push(ing);
  }

  removeIngFromPantry() {
    // if user cooks recipe remove item from user pantry list. splice()
  }

}
module.exports = Pantry
