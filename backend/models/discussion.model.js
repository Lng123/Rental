const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const discussionSchema = new Schema(
  {
    topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
    user: { type: String },
    title: { type: String },
    body: { type: String },
    replies: [{type: Schema.Types.ObjectId, ref: 'Reply'}],
  },
  { timestamps: true }
);

const topicSchema = new Schema({
    topic_id: {type: Number},
    topic:{type: String}
});

const repliesSchema = new Schema ({
  user: { type: String },
  body: { type: String },
  image: {type: String}
})

const Discussion = mongoose.model('Discussion', discussionSchema);
const Topic = mongoose.model('Topic', topicSchema);
const Reply = mongoose.model('Reply', repliesSchema);

module.exports =  {
    Discussion,
    Topic,
    Reply
}