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
    let mercuryExpectancy = new Galaxy("Mercury", 7);
    let peachesPreference = "yes"
    let blueberriesPreference = "yes"
    const lifeExpectancy = mercuryExpectancy.yearsLeftOnPlanetMercury(peachesPreference, blueberriesPreference); 
    expect(lifeExpectancy).toEqual((73/0.24)+(7/0.24)+20);
  })

  test("Should determine the user's left over years of life on each planet.", () => {
    let mercury = new Galaxy("Mercury", 7);
    let venus = new Galaxy("Venus", 7);
    let mars = new Galaxy("Mars", 7);
    let jupiter = new Galaxy("Jupiter", 7);
    let peachesPreference = "yes"
    let blueberriesPreference = "yes"
    const mercuryExpectancy = mercury.yearsLeftOnEachPlanet(peachesPreference, blueberriesPreference); 
    const venusExpectancy = venus.yearsLeftOnEachPlanet(peachesPreference, blueberriesPreference);
    const marsExpectancy = mars.yearsLeftOnEachPlanet(peachesPreference, blueberriesPreference);
    const jupiterExpectancy = jupiter.yearsLeftOnEachPlanet(peachesPreference, blueberriesPreference);
    expect(mercuryExpectancy).toEqual((73/0.24)+(7/0.24)+20);
    expect(venusExpectancy).toEqual((73/0.62)+(7/0.62)+25);
    expect(marsExpectancy).toEqual((73/1.88)+(7/1.88)+15);
    expect(jupiterExpectancy).toEqual((73/11.86)+(7/11.86)+10);
  })


  // test("Should create a function that calculates age in different planet years", () => {
  //   //Should be one of the latest test
  // })
  
});