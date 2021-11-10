const mongoose = require("mongoose");

const objectSchema = {
    _id: mongoose.Schema.Types.ObjectId,
    questions: [
        {
            question: String,
            selectAnswer: String,
            correctAnswer: String,
            incorrectAnswers: Array,
            correct: Boolean
        }
    ],
    id_game: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'game' 
    }
}    

const gameResultSchema = mongoose.Schema(objectSchema)
module.exports = mongoose.model('GameResult', gameResultSchema)