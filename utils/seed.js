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

  // Create empty array to hold the students
  const seedUsers = [];

  await User.create(
    {
      username: "mattreynolds53",
      email: "mr53@gmail.com",
    },
    {
      username: "SchoolBoyKev",
      email: "yaboykev@yahoo.com",
    },
    {
      username: "Wandisimo",
      password: "wandisimo@aol.com",
    }
  );

  seedUsers.push({
    username,
    email,
  });

  // Add students to the collection and await the results
  await User.collection.insertMany(seedUsers);

  const seedThoughts = [];

  await Thought.create(
    {
      thoughText:
        "Wow, I never thought about it like that. What a unique persepctive!",
      username: "mattreynolds53",
    },
    {
      tthoughtText: "I wish I could have joined. That trip looked so fun!",
      username: "SchoolBoyKev",
    },
    {
      thoughtText: "I can't believe that is what happened",
      username: "Wandisimo",
    }
  );

  seedThoughts.push({
    thoughtText,
    username,
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(seedUsers);
  console.table(seedThoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
