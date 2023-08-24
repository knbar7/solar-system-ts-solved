// SPACE DATA EXERCISE 10
// Return a given asteroid object of data
// make sure that you destructure your parameters

import { AllData, Asteroid } from "../data/data";

interface AsteroidFilter{
    allData: AllData;
    asteroidName: string;
}

export function getAsteroidDataByName({ allData, asteroidName }: AsteroidFilter) {
    const asteroids: Asteroid[] = allData.asteroids;
    const foundAsteroid: Asteroid | undefined = asteroids.find((asteroid: Asteroid) => asteroid.name === asteroidName);
    return foundAsteroid;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
