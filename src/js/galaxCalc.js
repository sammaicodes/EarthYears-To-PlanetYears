export default class Galaxy {
  constructor(planetName, usersAge) {
    this.planetName = planetName
    this.usersAge = usersAge
  }

  galacticAgeCalc() {
    let EarthYears = parseFloat(this.usersAge);
    let planetName = this.planetName
    let yourNewAge;
    while(planetName === "Mercury"){
      yourNewAge = EarthYears/0.24;
      return yourNewAge;
    }
    
  }
}