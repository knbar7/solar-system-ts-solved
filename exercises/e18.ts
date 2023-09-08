// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { Asteroid } from "../data/data";

export function getGreatestDiscoveryYear(asteroids: Asteroid[]) {
  const yearFrequencies = new Map<number, number>();
  let maxYear: number | undefined;
  let maxQuantity = 0;

  asteroids.forEach((asteroid) => {
    const discoveryYear = asteroid.discoveryYear;
    const currentQuantity = (yearFrequencies.get(discoveryYear) || 0) + 1;

    yearFrequencies.set(discoveryYear, currentQuantity);

    if (currentQuantity > maxQuantity) [maxYear, maxQuantity] = [discoveryYear, currentQuantity];
  });

  return maxYear;
}




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
