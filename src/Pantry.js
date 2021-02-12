class Pantry {
  constructor(pantry) {
    this.userPantry = pantry;
    this.shoppingList = [];
  }

  hasAllIng(ingList) {
    // if each ing on ingList is included in recipe return true
    // else return false
  }

  findMissingIng(recipe) {
    let missingAmount = [];
    this.userPantry.forEach(allUserIng => {
      recipe.ingredients.forEach(ing => {
        if(allUserIng.ingredient === ing.id){
          return allUserIng.amount >= ing.quantity.amount ? true : missingAmount.push({
            id: ing.id, amount: ing.quantity.amount - allUserIng.amount
          })
        }
      })
    });
    console.log(missingAmount);
    return missingAmount;
    // let missingIng = recipe.ingredients.filter(ing => {
    //   return !userIng.includes(ing.id)
    // });
    // this.addtoShoppingList(missingIng)
    // return missingIng;
  }

  addtoShoppingList(ing) {
    this.shoppingList.push(ing);
  }

  removeIngFromPantry() {
    // if user cooks recipe remove item from user pantry list. splice()
  }

}
module.exports = Pantry
