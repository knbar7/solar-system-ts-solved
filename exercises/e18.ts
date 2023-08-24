// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { Asteroid } from "../data/data";

export function getGreatestDiscoveryYear(asteroids: Asteroid[]) {
    let discoveryYears: number[] = [];
    asteroids.forEach((asteroid: Asteroid) => {
        let discoveryYear: number = asteroid.discoveryYear;
        discoveryYears.push(discoveryYear);
    });

    const yearFrequencies = new Map<number, number>(); 

    discoveryYears.forEach((year: number) => {
        yearFrequencies.set(year, (yearFrequencies.get(year) || 0) + 1);
    });

    let maxYear: number | undefined;
    let maxQuantity = 0;

    yearFrequencies.forEach((quantity, year) => {
        if (quantity > maxQuantity) {
            maxYear = year;
            maxQuantity = quantity;
        }
    });

    return maxYear;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
