const connection = require("../config/connection");
const { User, Thought } = require("../models");
// const { getRandomUser, getRandomThought } = require('./data');

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("You are connected!");

  // Drop existing courses
  await User.deleteMany({});

  // Drop existing students
  await Thought.deleteMany({});


  const seedThoughts = [
    {
      thoughtText:
        "Wow, I never thought about it like that. What a unique persepctive!",
      username: "mattreynolds53",
    },
    {
      thoughtText: "I wish I could have joined. That trip looked so fun!",
      username: "SchoolBoyKev",
    },
    {
      thoughtText: "I can't believe that is what happened",
      username: "Wandisimo",
    }
  ];

const thoughts = Thought.insertMany(seedThoughts);
console.log(thoughts);
console.log(thoughts[0]);


  // Create empty array to hold the students
  const seedUsers = [
    {
      username: "mattreynolds53",
      email: "mr53@gmail.com",
      thoughts: seedThoughts[0],
      // Give id from compass here^
    },
    {
      username: "SchoolBoyKev",
      email: "yaboykev@yahoo.com",
      thoughts: seedThoughts[1],
    },
    {
      username: "Wandisimo",
      email: "wandisimo@aol.com",
      thoughts: seedThoughts[2],
    }
  ];



  // Add students to the collection and await the results
  const users = await User.insertMany(seedUsers);
  console.log(users)

  // Log out the seed data to indicate what should appear in the database
  console.table(seedUsers);
  console.table(seedThoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
