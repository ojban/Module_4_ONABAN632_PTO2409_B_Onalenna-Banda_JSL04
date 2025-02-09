// # [JSL04] Submission: Monster Ternary Operator

// Write your code below this line to determine if it's a good idea to have a Monster Energy drink based on the current hour
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!"
// Otherwise, print "Better stick to water."

let userPreference = "Sugar-free"; // Possible values: 'Regular', 'Sugar-free', or undefined
console.log(userPreference ? userPreference : "Regular");

let cansLeft = 3; // Any number of cans
console.log(cansLeft < 5 ? "Time to restock!" : "We're stocked!");

let heartRate = 95; // Current heart rate in bpm
console.log(heartRate < 100 ? "Boost needed!" : "Energy levels are high!'");

let currentTemp = 4; // Current temperature in °C
console.log(currentTemp <= 5 ? "Chilled to perfection!" : "Needs a cooler!");

let currentHour = 22; // Define the current hour in 24-hour format
console.log(
  currentHour >= 7 && currentHour < 24
    ? "Unleash the beast!"
    : "Better stick to water."
);

// In each of these challenges, the ternary operator is used to decide between two options based on a condition,
// demonstrating its utility for concise conditional logic. Remember that while ternaries can make the code more succinct,
// they should be used judiciously to maintain readability, especially for more complex conditions.
