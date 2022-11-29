const { Schema, model } = require('mongoose');
const assignmentSchema = require('./Assignment');

// Schema to create User model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      
    },
    createdAt: {
      type: String,
      required: true,
    },
    username: {
    },
    reactions: {
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;