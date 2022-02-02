const { Schema, Types, model } = require("mongoose");
const moment = require('moment');

const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: {
        type: String,
        required: true,
        max: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
          type: Date,
          default: Date.now,
          // How should I create a getter method? Do i incorporate it here or further down in the file? Is the following the right one?
          get: (createdAtTime) => moment(createdAtTime).format('MMMM Do YYYY [at] h:mm a'),
        },
    },
    {
      toJSON: {
        getters: true
      }
    }
  );

  module.exports = reactionSchema