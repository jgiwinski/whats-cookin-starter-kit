class Pantry {
  constructor(pantry) {
    this.userPantry = pantry;
    this.shoppingList = [];
  }

  hasAllIng(recipe) {
    // need to use .every()
    // this.userPantry.every(ing => (this.userPantry.ingredient === recipe.ingredients.id) && (this.userPantry.amount >= recipe.ingredients.quantity.amount))

    recipe.ingredients.every(recItem => {
      const idOnly = this.userPantry.reduce((idList, item) => {
        return idList.push(item.ingredient)
      },[])
      console.log(idOnly)
      if(this.userPantry.includes(recItem.id))
    })

    // const match = this.userPantry.find(pantryItem => {
    //   recipe.ingredients.find(recipeIng =>
    //     recipeIng.id === pantryItem.ingredient)
    // });
    // console.log(match)

    // if(this.userPantry.every(ing => (this.userPantry.ingredient === recipe.ingredients.id) && (this.userPantry.amount >= recipe.ingredients.quantity.amount))){
    //   return true;
    // } else {
    //   this.findMissingIng(recipe);
    //   return false
    // }

   // if((this.userPantry.ingredient === recipe.ingredients.id) && (this.userPantry.amount >= recipe.ingredients.quantity.amount)){
   //    return true
   //  } else {
   //    this.findMissingIng(recipe);
   //    return false
   //  }
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
