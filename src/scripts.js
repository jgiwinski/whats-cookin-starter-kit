
const allRecipes = recipeData.map(recipe => {return new Recipe(recipe)})
const newRepository = new RecipeRepository(allRecipes, ingredientsData);
const allUsers = usersData.map(user => {
  const convertUser = new User (user, newRepository);
  convertUser.pantry = new Pantry (convertUser.pantry);
  return convertUser;
})
const recipesBtn = document.querySelector('.recipe-btn');
const favRecipeBtn = document.querySelector('.fav-recipe-btn');
const pantryBtn = document.querySelector('.pantry-btn');
const favRecipeDisplay = document.querySelector('.fav-recipes-display');
const allRecipeDisplay = document.querySelector('.all-recipes');
//MAIN DISPLAY
const recipeCards = document.querySelector('.recipe-cards');
const nameSearchBar = document.querySelector('#search-name');
const ingSearchBar = document.querySelector('#search-ing');
const tagList = document.querySelector('.tag-list');
let allCheckboxes = document.querySelectorAll('input[name="all-tags"]');
const submitBtn = document.querySelector('.submit');
const recipeDetails = document.querySelector('.recipe-details');
let instructions = document.querySelector('.instructions');
// PANTRY VIEW
const pantryView = document.getElementById('pantryView');
const pantryTable = document.getElementById('pantryTable');
const closePantryBtn = document.getElementById('closePantry')
// SHOPPING LIST VIEW
const shoppingView = document.getElementById('shoppingView')
const shoppingTable = document.getElementById('shoppingList')
const closeShoppingBtn = document.getElementById('closeShopping')

// GLOBAL VARS
let currentUser = null;

//EVENTLISTENERS
window.addEventListener('load', populateAll);
favRecipeBtn.addEventListener('click', viewFavRecipes);
recipesBtn.addEventListener('click', viewAllRecipes);
allRecipeDisplay.addEventListener('dblclick', triggerDetailView);
allRecipeDisplay.addEventListener('click', addFav);
favRecipeDisplay.addEventListener('click', toCook)
favRecipeDisplay.addEventListener('dblclick', removeFav);

recipeDetails.addEventListener('click', function () {
  addHidden (recipeDetails)
})
submitBtn.addEventListener('click', searchByTag);
pantryBtn.addEventListener('click', viewPantry);
closePantryBtn.addEventListener('click', closePantry);
closeShoppingBtn.addEventListener('click', closeShopping);

nameSearchBar.addEventListener('keydown', function (event) {
   if (event.keyCode === 13) {
      searchByName();
   }
});

ingSearchBar.addEventListener('keydown', function (event) {
   if (event.keyCode === 13) {
      searchByIng();
   }
});

//FUNCTIONS
function toggleFill (a) {
  a.classList.remove('far')
  a.classList.add('fas')
}

function removeHidden(element) {
  element.classList.remove('hidden');
}

function addHidden(element) {
  element.classList.add('hidden');
}

function clearDisplay(where) {
  where.innerHTML = '';
}

function addFav () {
  const toPush = currentUser.repository.recipeIndex.find(rec => rec.id === Number.parseInt(event.target.parentNode.id))
  currentUser.addToFav(toPush)
}

function removeFav () {
  const toSplice = currentUser.repository.recipeIndex.find(rec => rec.id === Number.parseInt(event.target.parentNode.id))
  currentUser.removeFromFav(toSplice)
  clearDisplay(favRecipeDisplay)
  populateRecipes(favRecipeDisplay, currentUser.favoriteRecipes);
}

function toCook () {
  const rec = currentUser.favoriteRecipes.find(rec => rec.id === Number.parseInt(event.target.parentNode.id))
  currentUser.addToCook(rec)
}

function viewFavRecipes() {
  currentUser.onFavorites = true;
  clearDisplay(favRecipeDisplay)
  populateRecipes(favRecipeDisplay, currentUser.favoriteRecipes);
  addHidden(allRecipeDisplay);
  removeHidden(favRecipeDisplay);
}

function viewAllRecipes() {
  currentUser.onFavorites = false;
  addHidden(favRecipeDisplay);
  removeHidden(allRecipeDisplay);
}

function searchByName() {
  let searchInput = nameSearchBar.value;
  let returnRecipe = newRepository.filterByName(searchInput);
  if (currentUser.onFavorites) {
    clearDisplay(favRecipeDisplay);
    populateRecipes(favRecipeDisplay, currentUser.favoritesByName(nameSearchBar.value));
  } else {
    clearDisplay(allRecipeDisplay);
    populateRecipes(allRecipeDisplay, returnRecipe);
  }
}

function searchByIng() {
  let searchInput = ingSearchBar.value;
  let returnRecipe = newRepository.filterByIng(searchInput);
  // clearDisplay(allRecipeDisplay);
  if (currentUser.onFavorites) {
    clearDisplay(favRecipeDisplay);
    populateRecipes(favRecipeDisplay, currentUser.favoritesByIngredients(ingSearchBar.value));
  } else {
    clearDisplay(allRecipeDisplay);
    populateRecipes(allRecipeDisplay, returnRecipe);
}
}

function searchByTag () {
  let checked = []
  allCheckboxes.forEach(box => {
    if (box.checked) {
      checked.push(box.value)
    }
  })
  if (currentUser.onFavorites) {
    // const result = ;
    clearDisplay(favRecipeDisplay);
    populateRecipes(favRecipeDisplay, currentUser.favoritesByTag(checked));
  } else {
    const result = newRepository.filterByTag(checked);
    clearDisplay(allRecipeDisplay);
    populateRecipes(allRecipeDisplay, result);
  }
}

function declareNewUser () {
  // currentUser = allUsers[Math.floor(Math.random() * usersData.length)];
  currentUser = allUsers[0]
}

function populateAll () {
  declareNewUser();
  populatePantry();
  populateRecipes(allRecipeDisplay, currentUser.repository.recipeIndex);
}

function populateRecipes(where, what) {
  what.forEach(recipe => {
    where.innerHTML +=
    `<section class="recipe-card-display center-column" id="${recipe.id}">
      <img src="${recipe.image}"/>
      <h4>${recipe.name}</h4>
      <div class="tag-box">
        ${populateRecipeTags(recipe)}
      </div>
    </section>`;
  })
}

// Saving original version just in case, the above version will edit the 

function populateRecipeTags (taggedItem) {
  return taggedItem.tags.reduce((tagList, tag) => {
    tagList += `<p class="tag">#${tag}</p>\n`
    return tagList
  }, "")
}

function populateModalContent (baseRecipe) {
  return `<h3>${baseRecipe.name}<h3>
  <h4>Igredients<h4>
  <h4>Instructions<h4>
  <h5>Step #</h5>
  `
}

function triggerDetailView () {
  let click = event.target.parentNode.id;
  const card = newRepository.recipeIndex.find(recipe => recipe.id === Number.parseInt(click))
  if (card) {
  viewRecDetails(card)
  }
}

function viewRecDetails (card) {
  recipeDetails.classList.toggle('hidden');
  recipeDetails.innerHTML = `
      <article class="column">
        <img class="detail-img" src="${card.image}"/>
        <div class="cost-ing">
          <h4>Total Cost: ${populateCost(card)}</h4>
          <div class="ing-details">
            ${populateIngredients(card)}
          </div>
        </div>
      </article>
      <article class="column details-title">
        <h1 id="rec-title">${card.name}</h1>
        <div class="instructions">
          ${populateInstructions(card)}
        </div>
      </article>`;
}

function populateCost (baseRecipe) {
  let totalCost = baseRecipe.calcCost(newRepository.ingredientIndex)
  let dollarCost = `$${totalCost / 100}`;
  return dollarCost;
}

function populateIngredients (baseRecipe) {
  const ing = baseRecipe.ingNames(newRepository.ingredientIndex)
  let result = '';
  let index = 0;
  while(index < ing.length){
    result += `<p>- ${ing[index]}: ${baseRecipe.ingredients[index].quantity.amount} ${baseRecipe.ingredients[index].quantity.unit}</p>\n`
    index++
  }
  return result;
}

function populateInstructions (baseRecipe) {
  const steps = baseRecipe.retInstructions();
  return steps.reduce((allSteps, step) => {
    allSteps += `<p>Step ${step.number}: ${step.instruction}</p>\n`
    return allSteps;
  },"");
}

function populatePantry () {
  currentUser.pantry.userPantry.forEach(pantryItem => {
    pantryTable.innerHTML +=
    `<tr>
      <td>${newRepository.ingredientIndex.find(ing => ing.id === pantryItem.ingredient).name}</td>
      <td>${pantryItem.amount}</td>
    </tr>`
  });
}

function refreshPantry () {
  pantryTable.innerHTML =
  `<tr>
    <th>Ingredient</th>
    <th>Quantity</th>
  </tr>`
}

function viewPantry () {
  removeHidden(pantryView)
}

function closePantry () {
  addHidden(pantryView)
}

function attemptCook () {
  currentUser.recipesToCook.forEach(recipe => {
    if (currentUser.pantry.hasAllIng(recipe)) {
      currentUser.pantry.removeIngFromPantry(recipe);
      refreshPantry();
      populatePantry();
      alert(`Nice work! The ingredients used have been removed from your pantry so make sure to stock up next time.`)
    } else {
      populateShoppingList();
      viewShopping();
      alert(`Sorry, you don't have enough ingredients to cook ${recipe.name}. The missing ingredients have been added to this shopping list for your convenience`)
    }
  })
}

function populateShoppingList () {
  currentUser.pantry.findMissingIng().forEach(missItem => {
    shoppingView.innerHTML +=
    `<tr>
      <td>${newRepository.ingredientIndex.find(ing => ing.id === missItem.id).name}</td>
      <td>${missItem.amount}</td>
    </tr>`
  });
}

function viewShopping () {
  removeHidden(shoppingView)
}

function closeShopping () {
  addHidden(shoppingView)
}
