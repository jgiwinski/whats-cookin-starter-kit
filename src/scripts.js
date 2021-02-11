import MicroModal from 'micromodal';
var MicroModal = require('../node_modules/micromodal');

const recipesBtn = document.querySelector('.recipe-btn');
const favRecipeBtn = document.querySelector('.fav-recipe-btn');
const pantryBtn = document.querySelector('.pantry-btn');
const favRecipeDisplay = document.querySelector('.fav-recipes-display');
const allRecipeDisplay = document.querySelector('.all-recipes');
const recipeCard = document.querySelector('recipe-card-display');
const recipePopUp = document.querySelector('#modal-1');

favRecipeBtn.addEventListener('click', viewFavRecipes);
recipesBtn.addEventListener('click', viewAllRecipes);
MicroModal.show('modal-1')


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

function populateRecipes() {
  recipeDate.forEach(recipe => {
    recipeCard.innerHTML +=
    `<section class="recipe-card-display center-column">
      <i class="far fa-bookmark fa-4x"></i>
      <img src="${recipe.image}"/>
      <h4>${recipe.name}</h4>
      <div class="tag-box">
        <p class="tag">dessert</p>
        <p class="tag">snack</p>
      </div>
    </section>`
    // add way to populate tags
  })
}
