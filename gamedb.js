const mongoose = require("mongoose");

const objectSchema = {
    _id: mongoose.Schema.Types.ObjectId,
    score: Number,
    correctAnwser: Number,
    incorrectAnwser: Number,
    date: Date,
    // id_user: {
    //     type: Schema.ObjectId, 
    //     ref: 'user' 
    // }
    id_user: String
}

const gameSchema = mongoose.Schema(objectSchema)
module.exports = mongoose.model('Game', gameSchema)