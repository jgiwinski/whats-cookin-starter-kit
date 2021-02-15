class Pantry {
  constructor(pantry) {
    this.userPantry = pantry;
    this.shoppingList = [];
  }

  findIngredient (id) {
    return this.userPantry.find(pantryItem => pantryItem.ingredient === id)
  }

  findMissingIng (recipe) {
    let missingIngredients = recipe.ingredients.reduce((report, recIng) => {
      if (!this.findIngredient(recIng.id)) {
        report.push({id: recIng.id, amount: recIng.quantity.amount})
      } else if (this.findIngredient(recIng.id).amount < recIng.quantity.amount) {
        report.push({id: recIng.id, amount: (recIng.quantity.amount - this.findIngredient(recIng.id).amount)})
      }
      return report
    }, [])
    return missingIngredients
  }

  hasAllIng(recipe) {
    let result = true
    recipe.ingredients.forEach(recIng => {
      const inPantry = this.findIngredient(recIng.id)
      if (!inPantry || inPantry.amount < recIng.quantity.amount) {
        result = false;
      }
    })
    return result
  }

  addtoShoppingList(ing) {
    this.shoppingList.push(ing);
  }

  removeIngFromPantry(recipe) {
    this.userPantry = this.userPantry.map(pantryItem => {
      let idMatch = recipe.ingredients.find(recipeIng =>
        recipeIng.id === pantryItem.ingredient)
      if(idMatch === undefined){
        return pantryItem;
      } else {
        const newAmount = pantryItem.amount - idMatch.quantity.amount;
        const updatePantry = {ingredient: pantryItem.ingredient, amount: newAmount};
        return updatePantry;
      }
    });
  }

}
module.exports = Pantry
