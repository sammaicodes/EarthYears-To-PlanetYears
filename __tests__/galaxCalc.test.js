import Galaxy from '../src/js/galaxCalc.js'

describe('Galaxy', () => {
  test('Should create an object with properties: planetName, usersAge,', () => {
    let user = new Galaxy("Mercury", 7);
    expect(user.planetName).toEqual("Mercury");
    expect(user.usersAge).toEqual(7);
  })
  test("Should create a function that calculates age in different planet years", () => {
    let user = new Galaxy();
    expect(user.galacticAgeCalc()).toEqual(true);
  })
  
});