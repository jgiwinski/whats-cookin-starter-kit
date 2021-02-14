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
const tagList = document.querySelector('.tag-list')

window.addEventListener('load', populateAll)
favRecipeBtn.addEventListener('click', viewFavRecipes);
recipesBtn.addEventListener('click', viewAllRecipes);
allRecipeDisplay.addEventListener('click', openModal)
// MicroModal.show('modal-1')

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
  const names = baseRecipe.ingNames(ingredientsData)
  names.reduce()
}

function populateInstructions () {

}

function populateRecipes() {
  recipeData.forEach(recipe => {
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
      <div class="modal-content">
        <span class="close">&times;</span>
          ${populateModalContent(recipe)}
      </div>
    </div>`
  })
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
    `<input type="checkbox" id="${t}Tag" />
    <label for="${t}Tag">#${t}</label><br />`
  });
}

function populateAll () {
  populateRecipes()
  populateTagList()
}

function openModal () {
  Event.target.closest(".modal").style.display = "block"
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