// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

import { AllData } from "../data/data";

export function getAveragePlanetsTemperature(data: AllData) {
    const { planets } = data;

    const { totalTemp, planetCount } = planets.reduce(
        (acc, planet) => ({
            totalTemp: acc.totalTemp + planet.avgTemp,
            planetCount: acc.planetCount + 1,
        }),
        { totalTemp: 0, planetCount: 0 }
    );

    return planetCount ? totalTemp / planetCount : 0;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
