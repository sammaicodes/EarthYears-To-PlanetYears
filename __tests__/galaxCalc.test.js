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

  test("Should create a function that coverts a person's age in Earth years to Mars years.", () => {
    let user = new Galaxy("Mars", 7);
    const yearsInChoicePlanet = user.marsAgeCalc(); 
    expect(yearsInChoicePlanet).toEqual(7/1.88);
  })

  test("Should create a function that coverts a person's age in Earth years to Jupiter years.", () => {
    let user = new Galaxy("Jupiter", 7);
    const yearsInChoicePlanet = user.jupiterAgeCalc(); 
    expect(yearsInChoicePlanet).toEqual(7/11.86);
  })

  test("Should determine the user's left over years of life on planet Mercury.", () => {
    let mercury = new Galaxy("Mercury", 7);
    const mercuryExpectancy = mercury.yearsLeftOnPlanetMercury();
    let yearsLeft = ((73/0.24)-(mercury.mercuryAgeCalc())) 
    expect(mercuryExpectancy).toEqual(yearsLeft);
  })

  test("Should determine the years a user has lived passed its life expectancy, should this be the case.", () => {
    let mercury = new Galaxy("Mercury", 75);
    const mercuryExpectancy = mercury.yearsPassedLifeExp(); 
    expect(mercuryExpectancy).toEqual(8.333333333333314);
  })

  test("Should determine the user's left over years of life on planet Venus.", () => {
    let venus = new Galaxy("Venus", 7);
    const venusExpectancy = venus.yearsLeftOnPlanetVenus();
    let yearsLeft = ((73/0.62)-(venus.venusAgeCalc())) 
    expect(venusExpectancy).toEqual(yearsLeft);
  })
  
});