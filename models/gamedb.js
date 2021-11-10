const mongoose = require("mongoose");

const objectSchema = {
    _id: mongoose.Schema.Types.ObjectId,
    score: Number,
    date: {
        type: Date,
        default: Date.now
    },
    id_user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user' 
    }
}
const gameSchema = mongoose.Schema(objectSchema)
module.exports = mongoose.model('Game', gameSchema)