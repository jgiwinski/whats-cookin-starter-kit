// import MicroModal from 'micromodal';
// var MicroModal = require('../node_modules/micromodal');
// const ingredientsData = require('../data/ingredients')
// const recipeData = require('../data/recipes')
// const usersData = require('../data/users')
// const RecipeRepository = require('./RecipeRepository');

const allRecipes = recipeData.map(recipe => {return new Recipe(recipe)})
const newRepository = new RecipeRepository(allRecipes, ingredientsData);

//NAV BAR
const recipesBtn = document.querySelector('.recipe-btn');
const favRecipeBtn = document.querySelector('.fav-recipe-btn');
const pantryBtn = document.querySelector('.pantry-btn');
const favRecipeDisplay = document.querySelector('.fav-recipes-display');
const allRecipeDisplay = document.querySelector('.all-recipes');
//MAIN DISPLAY
const nameSearchBar = document.querySelector('#search-name');
const ingSearchBar = document.querySelector('#search-ing');
const recipeCard = document.querySelector('recipe-card-display');
const tagList = document.querySelector('.tag-list')
const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
const submitBtn = document.querySelector('.submit-tag');


//EVENTLISTENERS
window.addEventListener('load', populateAll)
favRecipeBtn.addEventListener('click', viewFavRecipes);
recipesBtn.addEventListener('click', viewAllRecipes);
submitBtn.addEventListener('click', searchByTag);
// allRecipeDisplay.addEventListener('click', openModal)
// MicroModal.show('modal-1')

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

function populateAll () {
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
    `<section class="recipe-card-display center-column">
      <i class="far fa-bookmark fa-4x"></i>
      <img src="${recipe.image}"/>
      <h4>${recipe.name}</h4>
      <div class="tag-box">
        ${populateRecipeTags(recipe)}
      </div>
    </section>
    <div id="${recipe.id}" class="modal">
      <div class="modal-content hidden">
        <span class="close">&times;</span>
          ${populateModalContent(recipe)}
      </div>
    </div>`
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

function populateIngredients (baseRecipe) {
  const names = baseRecipe.ingNames(newRepository.ingredientIndex)
  names.reduce()
}

function populateInstructions () {

}
