const chai = require('chai');
const expect = chai.expect;
const Pantry = require('../src/Pantry');
const Recipe = require('../src/Recipe');
const {
  recIceWater,
  recCereal,
  recJuice,
  ingIndex,
  daphneUser,
  simonUser
} = require('../test/dummy-recipes');

describe('Pantry', () => {
  let pantry;
  // let recipe;
  // let recipe2;
  beforeEach(function () {
    // pantry = new Pantry(simonUser);
    // recipe = new Recipe(recIceWater);
    // recipe2 = new Recipe(recCereal);
  });

  it('should be a function', () => {
    expect(Pantry).to.be.a('function');
  });

  it('should be an instance of Pantry', () => {
    expect(simonUser.pantry).to.be.an.instanceOf(Pantry);
  });

  it('should hold user pantry data', () => {
    expect(simonUser.pantry.userPantry).to.deep.equal([
      {
        "ingredient": 9412,
        "amount": 4
      },
      {
        "ingredient": 15,
        "amount": 7
      },
      {
        "ingredient": 365,
        "amount": 10
      }
    ]);
  });

  it('should default to an empty shopping list', () => {
    expect(simonUser.pantry.shoppingList).to.deep.equal([]);
  });

  describe('hasAllIng', () => {

    it('should return false if there are missing ingredients from the list', () => {
      expect(simonUser.pantry.hasAllIng(recCereal)).to.deep.equal(false);
    });

    it('should return true if there are enough ingredients to make the recipe', () => {
      expect(daphneUser.pantry.hasAllIng(recCereal)).to.deep.equal(true);
    });

  });

  describe('findMissingIng', () => {

    it('should return the missing ingredients from the recipe', () => {
      expect(simonUser.pantry.findMissingIng(recCereal)).to.deep.equal([{id: 15, amount: 5}])
    });

    it('should list additional ingredients in shopping list that the user needs to make recipe', () => {
      const missingIng = simonUser.pantry.findMissingIng(recIceWater);
      simonUser.pantry.addtoShoppingList(missingIng);
      expect(simonUser.pantry.shoppingList).to.be.an('array').with.a.lengthOf(1);
    });

  });

  it('should update the amount of an item if it is used in a recipe', () => {
    daphneUser.pantry.removeIngFromPantry(recCereal);
    expect(daphneUser.pantry.userPantry).to.deep.equal([
      {
        "ingredient": 15,
        "amount": 0
      },
      {
        "ingredient": 365,
        "amount": 2
      },
      {
        "ingredient": 78334,
        "amount": 10
      }
    ])
  });

  it('should only remove ingredients if the user has enough in their pantry', () => {
    simonUser.pantry.cookRecipe(recIceWater);
    expect(simonUser.pantry.cookRecipe(recIceWater)).to.deep.equal(`Sorry, looks like you don't have enough ingredients to make Ice Water.`)
  });

});
