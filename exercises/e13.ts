// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

import { AllData, Planet } from "../data/data";

export function getAveragePlanetsTemperature(data: AllData) {
    const planets: Planet[] = data.planets;
    let totalTemp: number = 0;
    let planetCount: number = 0;
    planets.map((planet: Planet) => {
        totalTemp += planet.avgTemp;
        planetCount += 1;
    })
    return totalTemp / planetCount;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
