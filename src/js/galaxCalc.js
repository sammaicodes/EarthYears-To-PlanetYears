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

  marsAgeCalc() {
    let EarthYears = parseFloat(this.usersAge);
    let planetName = this.planetName
    let yourNewAge;
    while(planetName === "Mars"){
      yourNewAge = EarthYears/1.88;
      return yourNewAge;
    } 
  }

  jupiterAgeCalc() {
    let EarthYears = parseFloat(this.usersAge);
    let planetName = this.planetName
    let yourNewAge;
    while(planetName === "Jupiter"){
      yourNewAge = EarthYears/11.86;
      return yourNewAge;
    } 
  }

  yearsLeftOnPlanetMercury(){
    let mercuryAvgLifeExpectancy = parseFloat(73/0.24);
    let yearsLeftInMercury = mercuryAvgLifeExpectancy - this.mercuryAgeCalc();
    return yearsLeftInMercury;
  }

  yearsPassedMercLifeExp(){
    let mercuryAvgLifeExpectancy = parseFloat(73/0.24);
    let yearsPassed = Math.abs(mercuryAvgLifeExpectancy - this.mercuryAgeCalc()); 
    return yearsPassed;
  }

  yearsLeftOnPlanetVenus(){
    let venusAvgLifeExpectancy = parseFloat(73/0.62);
    let yearsLeftInVenus = venusAvgLifeExpectancy - this.venusAgeCalc();
    return yearsLeftInVenus;
  }

  yearsPassedVenLifeExp(){
    let venusAvgLifeExpectancy = parseFloat(73/0.62);
    let yearsPassed = Math.abs(venusAvgLifeExpectancy - this.venusAgeCalc()); 
      return yearsPassed;
  }

  yearsLeftOnPlanetMars(){
    let marsAvgLifeExpectancy = parseFloat(73/1.88);
    let yearsLeftInMars = marsAvgLifeExpectancy - this.marsAgeCalc();
      return yearsLeftInMars;
  }

  yearsPassedMarLifeExp(){
    let marsAvgLifeExpectancy = parseFloat(73/1.88);
    let yearsPassed = Math.abs(marsAvgLifeExpectancy - this.marsAgeCalc()); 
      return yearsPassed;
  }

  yearsLeftOnPlanetJupiter(){
    let jupiterAvgLifeExpectancy = parseFloat(73/11.86);
    let yearsLeftInJupiter = jupiterAvgLifeExpectancy - this.jupiterAgeCalc();
      return yearsLeftInJupiter;
  }

  yearsPassedJupLifeExp(){
    let jupiterAvgLifeExpectancy = parseFloat(73/11.86);
    let yearsPassed = Math.abs(jupiterAvgLifeExpectancy - this.jupiterAgeCalc()); 
      return yearsPassed; 
  }

}