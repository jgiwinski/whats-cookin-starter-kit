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
  let pantry;
  let recipe;
  let recipe2;
  beforeEach(function () {
    pantry = new Pantry(simon);
    recipe = new Recipe(recIceWater);
    recipe2 = new Recipe(recCereal);
  });

  it('should be a function', () => {
    expect(Pantry).to.be.a('function');
  });

  it('should be an instance of Pantry', () => {
    expect(pantry).to.be.an.instanceOf(Pantry);
  });

  it('should hold user pantry data', () => {
    expect(pantry.userPantry).to.deep.equal(simon.pantry);
  });

  it('should default to an empty shopping list', () => {
    expect(pantry.shoppingList).to.deep.equal([]);
  });

  describe('hasAllIng', () => {

    it('should check if there are missing ingredients from the list', () => {
      expect(pantry.hasAllIng(recipe2)).to.deep.equal(true);
    });

    it('should return false if user does not have all ingredients to make recipe', () => {
      expect(pantry2.hasAllIng(recipe)).to.deep.equal(false);
    });

  });

  describe('findMissingIng', () => {

    it('should return the missing ingredients from the recipe', () => {
        expect(pantry.findMissingIng(recCereal).to.deep.equal([{id: 365, amount: 2}]))
        // expect(pantry.findMissingIng(recipe)).to.deep.equal([{ id: 78334, quantity: { amount: 0.5, unit: 'c' } }])
        // do we need to return the specific amount of each ing? if so im fucked....
    });

    it('should list additional ingredients in shopping list that the user needs to make recipe', () => {
      pantry.findMissingIng(recipe)
      expect(pantry.shoppingList).to.be.an('array').with.a.lengthOf(1);
    });

  });

  // test for: remove ing from pantry if ingList has all the ing in the recipe and user cooks recipe.

  //

});
