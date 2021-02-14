class Pantry {
  constructor(pantry) {
    this.userPantry = pantry;
    this.shoppingList = [];
  }

  hasAllIng(recipe) {
    const idOnly = this.userPantry.reduce((idList, item) => {
      idList.push(item.ingredient)
      return idList;
    },[])

    const test1 = recipe.ingredients.every(recItem =>
      idOnly.includes(recItem.id)
    });
    const test2 = xxx
    if(test1 && test2){
      return true;
    } else {
      return false;
    }
  }

  findMissingIng(recipe) {
    let missingAmount = [];
    this.userPantry.forEach(pantryItem => {
      recipe.ingredients.forEach(ing => {
        if (pantryItem.ingredient === ing.id && pantryItem.amount < ing.quantity.amount) {
          missingAmount.push({
            id: ing.id,
            amount: ing.quantity.amount - pantryItem.amount
          })
        }
      })
    });
    return missingAmount;
    // this is just the missing amount. what if the ing doesnt exist at all?
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
