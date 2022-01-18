const { Schema, Types } = require("mongoose");
// See if you need to add any other requirements for this Model

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // How should I create a getter method? Do i incorporate it here or further down in the file? Is the following the right one?
      immutable: true,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: {
      // Array of nested documents created with the reactionSchema
    },
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Initialize our User model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
