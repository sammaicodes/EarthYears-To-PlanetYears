export default class Galaxy {
  constructor(planetName, usersAge) {
    this.planetName = planetName
    this.usersAge = usersAge
  }

  mercuryAgeCalc() {
    let EarthYears = parseFloat(this.usersAge);
    let planetName = this.planetName
    let yourNewAge;
    while(planetName === "Mercury"){
      yourNewAge = EarthYears/0.24;
      return yourNewAge;
    }
  }
  venusAgeCalc() {
    let EarthYears = parseFloat(this.usersAge);
    let planetName = this.planetName
    let yourNewAge;
    while(planetName === "Venus"){
      yourNewAge = EarthYears/0.62;
      return yourNewAge;
    } 
  }
}