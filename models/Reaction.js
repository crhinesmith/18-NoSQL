const { Schema} = require('mongoose');

// Schema to create Reaction model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      max_length: 280,
    },
    username: {
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
    }
  },
  {
    timestamps: true,
    toJSON: { getters: true, virtuals: true },
  }
);



module.exports = reactionSchema;
