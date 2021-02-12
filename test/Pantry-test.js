const chai = require('chai');
const expect = chai.expect;
const Pantry = require('../src/Pantry');
const Recipe = require('../src/Recipe.js');
const {
  recIceWater,
  recCereal,
  recJuice,
  ingIndex,
  daphne,
  simon
} = require('../test/dummy-recipes');

describe('Pantry', () => {
  // let pantry;
  // let recipe;
  // beforeEach(function () {
  //   pantry = new Pantry(userData[0].pantry);
  //   recipe = new Recipe(recipeData[0]);
  // });

  it('should be a function', () => {
    expect(Pantry).to.be.a('function');
  });

  it('should be an instance of Pantry', () => {
    const pantry = new Pantry(daphne);
    expect(pantry).to.be.an.instanceOf(Pantry);
  });

  it('should hold user pantry data', () => {
    const pantry = new Pantry(simon);
    expect(pantry.userPantry).to.deep.equal(simon.pantry);
  });

  // it('should default as an empty pantry', () => {
  //   const pantry = new Pantry();
  //   expect(pantry.userPantry).to.deep.equal([]);
  // });

  it('should default to an empty shopping list', () => {
    const pantry = new Pantry(simon);
    expect(pantry.shoppingList).to.deep.equal([]);
  });

  // it('should store an instance of recipe the user wants to make', () => {
  //   const pantry = new Pantry(simon);
  //   expect(pantry.recipe[0]).to.be.an.instanceof(Recipe);
  // });

  describe('hasAllIng', () => {

    it('should say if there are missing ingredients from the list', () => {
      const pantry = new Pantry(simon);
      expect(pantry.hasAllIng(recCereal)).to.deep.equal(true);
      const pantry2 = new Pantry(simon);
      expect(pantry2.hasAllIng(recIceWater)).to.deep.equal(false);
    });

  });

  describe('findMissingIng', () => {

    it('should return the missing ingredients from the recipe', () => {
        const pantry = new Pantry(simon);
        expect(pantry.findMissingIng(recIceWater)).to.deep.equal([{ id: 78334, quantity: { amount: 0.5, unit: 'c' } }])
        // do we need to return the specific amount of each ing? if so im fucked....
    });

  });

  // add ing to shopping list if not in pantry

  // test for: remove ing from pantry if ingList has all the ing in the recipe and user cooks recipe.

  //

});
