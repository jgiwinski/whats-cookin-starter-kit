const chai = require('chai');
const expect = chai.expect;
const Pantry = require('../src/Pantry');
const {
  recIceWater,
  recCereal,
  recJuice,
  daphneClone,
  daphneUser,
  simonUser
} = require('../test/dummy-recipes');
simonUser.pantry = new Pantry (simonUser.pantry)
daphneUser.pantry = new Pantry (daphneUser.pantry)
daphneClone.pantry = new Pantry (daphneClone.pantry)

describe('Pantry', () => {
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
        "amount": 24
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
    it('should return false if user is missing any ingredients', () => {
      expect(daphneUser.pantry.hasAllIng(recJuice)).to.deep.equal(false);
    });

    it('should return true if user posesses all necessary ingredients', () => {
      expect(daphneUser.pantry.hasAllIng(recCereal)).to.deep.equal(true);
    });

  });

  describe('findMissingIng', () => {
    it('should accurately return the missing ingredients from the recipe', () => {
      expect(daphneUser.pantry.findMissingIng(recJuice)).to.deep.equal([{"id": 9412, "amount": 1}, {"id": 88512, "amount": 3}])
    });

    it('should list additional ingredients in shopping list that the user needs to make recipe', () => {
      const missingIng = simonUser.pantry.findMissingIng(recIceWater);
      simonUser.pantry.addtoShoppingList(missingIng);
      expect(simonUser.pantry.shoppingList).to.be.an('array').with.a.lengthOf(1);
    });

  });

  it('should update the amount of an item if it is used in a recipe', () => {
    daphneClone.pantry.removeIngFromPantry(recCereal);
    expect(daphneClone.pantry.userPantry).to.deep.equal([
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
    simonUser.cookRecipe(recIceWater);
    expect(simonUser.cookRecipe(recIceWater)).to.deep.equal(`Sorry, looks like you don't have enough ingredients to make Ice Water.`)
  });

});
