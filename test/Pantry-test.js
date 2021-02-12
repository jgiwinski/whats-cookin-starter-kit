const chai = require('chai');
// const usersData = require('../data/users.js');
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
    const pantry = new Pantry();
    expect(pantry).to.be.an.instanceOf(Pantry);
  });

  it('should hold user pantry data', () => {
    const pantry = new Pantry(simon.pantry);
    expect(pantry.userPantry).to.deep.equal(simon.pantry);
  });

  it('should default as an empty pantry', () => {
    const pantry = new Pantry();
    expect(pantry.userPantry).to.deep.equal([]);
  });

});
