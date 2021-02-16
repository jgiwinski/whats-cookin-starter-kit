
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
const body = document.querySelector('body');
const nameSearchBar = document.querySelector('#search-name');
const ingSearchBar = document.querySelector('#search-ing');
// const recipeCard = document.querySelector('.recipe-card-display');
const tagList = document.querySelector('.tag-list');
const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
const submitBtn = document.querySelector('.submit');
const recipeDetails = document.querySelector('.recipe-details');

let instructions = document.querySelector('.instructions');

// GLOBAL VARS
let currentUser = null;


//EVENTLISTENERS
window.addEventListener('load', populateAll);
favRecipeBtn.addEventListener('click', viewFavRecipes);
recipesBtn.addEventListener('click', viewAllRecipes);
submitBtn.addEventListener('click', searchByTag);
body.addEventListener('click', triggerDetailView);

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
function removeHidden(element) {
  element.classList.remove('hidden');
}

function addHidden(element) {
  element.classList.add('hidden');
}

function clearDisplay() {
  allRecipeDisplay.innerHTML = '';
}

function viewFavRecipes() {
  addHidden(allRecipeDisplay);
  removeHidden(favRecipeDisplay);
}

function viewAllRecipes() {
  addHidden(favRecipeDisplay);
  removeHidden(allRecipeDisplay);
}

function searchByName() {
  let searchInput = nameSearchBar.value;
  let returnRecipe = newRepository.filterByName(searchInput);
  clearDisplay()
  populateRecipes(returnRecipe);
}

function searchByIng() {
  let searchInput = ingSearchBar.value;
  let returnRecipe = newRepository.filterByIng(searchInput);
  clearDisplay();
  populateRecipes(returnRecipe);
}

function searchByTag () {
  // allCheckboxes.
  // newRepository.filterByTag();
  clearDisplay();
  populateRecipes(returnRecipe);
}

function declareNewUser () {
  currentUser = allUsers[Math.floor(Math.random() * usersData.length)];
}

function populateAll () {
  declareNewUser();
  populateRecipes(newRepository.recipeIndex);
  populateTagList();
}

function populateTagList () {
  const allTags = recipeData.reduce((tagsOnly, recipe) => {
    recipe.tags.forEach(tag => {
      if (!tagsOnly.includes(tag))
      tagsOnly.push(tag)
    })
    return tagsOnly
  }, []).sort();

  allTags.forEach(t => {
    tagList.innerHTML +=
    `<input type="checkbox" value="${t}" id="${t}Tag" />
    <label for="${t}Tag">#${t}</label><br />`
  });
}

function populateRecipes(recipe) {
  recipe.forEach(recipe => {
    allRecipeDisplay.innerHTML +=
    `<section class="recipe-card-display center-column" id="${recipe.id}">
      <i class="far fa-bookmark fa-4x"></i>
      <img src="${recipe.image}" id="${recipe.id}"/>
      <button class="green-btn" id="cook-btn">Cook Queue</button>
      <h4 id="${recipe.id}">${recipe.name}</h4>
      <div class="tag-box">
        ${populateRecipeTags(recipe)}
      </div>
    </section>`;
  })
}

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
  let click = event.target.id;
  const card = newRepository.recipeIndex.find(recipe => recipe.id === Number.parseInt(click))
  if (card) {
  viewRecDetails(card)
  }
}

function triggerFavorites () {
  const recipeId = event.target.id;
  const recipe = newRepository.recipeIndex.find(recipe => recipe.id === Number.parseInt(recipeId))
  

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
  const totalCost = baseRecipe.calcCost(newRepository.ingredientIndex)
  return totalCost;
}

function populateIngredients (baseRecipe) {
  const ing = baseRecipe.ingNames(newRepository.ingredientIndex)
  let result = '';
  let index = 0;
  console.log(index)
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
