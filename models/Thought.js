const { Schema, model } = require("mongoose");
const moment = require('moment');
const reactionSchema = require('./Reaction')
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
      iget: (createdAtTime) => moment(createdAtTime).format('MMMM Do YYYY [at] h:mm a'),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: {
        reactions: [reactionSchema]
      // Array of nested documents created with the reactionSchema
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
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
