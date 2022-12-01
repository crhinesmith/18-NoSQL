const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create User model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => {
            return date
            //use moment or day.js to format the date 
        }
      },
    username: {
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;