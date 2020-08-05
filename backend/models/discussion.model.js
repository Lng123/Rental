const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const discussionSchema = new Schema(
  {
    topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
    user: { type: String },
    title: { type: String },
    body: { type: String },
  },
  { timestamps: true }
);

const topicSchema = new Schema({
    topic_id: {type: Number},
    topic:{type: String}
});

const Discussion = mongoose.model('Discussion', discussionSchema);
const Topic = mongoose.model('Topic', topicSchema);

module.exports =  {
    Discussion,
    Topic
}