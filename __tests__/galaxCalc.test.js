import Galaxy from '../src/js/galaxCalc.js'

describe('Galaxy', () => {
  test('Should create an object with properties: planetName, usersAge,', () => {
    let user = new Galaxy("Mercury", 7);
    expect(user.planetName).toEqual("Mercury");
    expect(user.usersAge).toEqual(7);
  })
  test("Should create a function that coverts a person's age in Earth years to Mercury years.", () => {
    let user = new Galaxy("Mercury", 7);
    const yearsInChoicePlanet = user.mercuryAgeCalc(); 
    expect(yearsInChoicePlanet).toEqual(7/0.24);
  })

  test("Should create a function that coverts a person's age in Earth years to Venus years.", () => {
    let user = new Galaxy("Venus", 7);
    const yearsInChoicePlanet = user.venusAgeCalc(); 
    expect(yearsInChoicePlanet).toEqual(7/0.62);
  })

  // test("Should create a function that calculates age in different planet years", () => {
  //   //Should be one of the latest test
  // })
  
});