const users = [
    'mattreynolds53',
    'SchoolBoyKev',
    'Wandisimo',
];

const thoughts = [
    "Wow, I never thought about it like that. What a unique persepctive!",
    "I wish I could have joined. That trip looked so fun!",
    "I can't believe that is what happened",
];

// Get a random item given an array
const getRandomValue = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomUser = () =>
  `${getRandomValue(users)}`;

// Add a function to generate random thoughts for each user
const getRandomThought = () =>
    `${getRandomValue(thoughts)}`;

// Export the functions for use in seed.js
module.exports = { getRandomUser, getRandomThought };
