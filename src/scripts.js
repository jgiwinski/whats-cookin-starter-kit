// import MicroModal from 'micromodal';
// var MicroModal = require('../node_modules/micromodal');
// const ingredientsData = require('../data/ingredients')
// const recipeData = require('../data/recipes')
// const usersData = require('../data/users')


const recipesBtn = document.querySelector('.recipe-btn');
const favRecipeBtn = document.querySelector('.fav-recipe-btn');
const pantryBtn = document.querySelector('.pantry-btn');
const favRecipeDisplay = document.querySelector('.fav-recipes-display');
const allRecipeDisplay = document.querySelector('.all-recipes');
const recipeCard = document.querySelector('recipe-card-display');
const recipePopUp = document.querySelector('#modal-1');
const modaldummy = document.querySelector('.modal')

window.addEventListener('load', populateRecipes)
favRecipeBtn.addEventListener('click', viewFavRecipes);
recipesBtn.addEventListener('click', viewAllRecipes);
allRecipeDisplay.addEventListener('click', openModal)
// MicroModal.show('modal-1')

function populateTags (taggedItem) {
  return taggedItem.tags.reduce((tagList, tag) => {
    tagList += `<p class="tag">${tag}</p>\n`
    return tagList
  }, "")
}

function populateIngredients () {

}

function populateInstructions () {

}

function populateRecipes() {
  recipeData.forEach(recipe => {
    allRecipeDisplay.innerHTML +=
    `<section class="recipe-card-display center-column">
      <img src="${recipe.image}"/>
      <h4>${recipe.name}</h4>
      <div class="tag-box">
        ${populateTags(recipe)}
      </div>
    </section>
    <div id="${recipe.id}" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
          <p>${recipe.name}</p>
      </div>
    </div>`
  })
}

function openModal () {
  const chooseRecipe = event.target.closest(".modal")
  chooseRecipe.style.display = "block"
}


function removeHidden(element) {
  element.classList.remove('hidden');
}

function addHidden(element) {
  element.classList.add('hidden');
}

function viewFavRecipes() {
  addHidden(allRecipeDisplay);
  removeHidden(favRecipeDisplay);
}

function viewAllRecipes() {
  addHidden(favRecipeDisplay);
  removeHidden(allRecipeDisplay);
}


