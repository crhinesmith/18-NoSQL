const { Schema, model } = require('mongoose');

// Schema to create Reaction model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: new ObjectId
    },
    reactionBody: {
      type: String,
      required: true,
      max_length: 280,
    },
    username: {
      type: String,
      required: true,
      ref: 'User'
      //correct way ?
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

const Reaction = model('reaction', reactionSchema);

//if the notes say it is only a subdocument, my assumption is that it is not necessary to do the above line. Correct0? 
module.exports = Reaction;
