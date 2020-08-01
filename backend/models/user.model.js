const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password:{type: String, required: true},
    rating: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

const ratingSchema = new Schema({
    rate: {type: Number, required: true},
    rater: {type: Schema.Types.ObjectId, ref: 'User'}
})

const Rating = mongoose.model('Rating', ratingSchema)
const User = mongoose.model('User', userSchema);

module.exports = User;