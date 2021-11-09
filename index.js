const mongoose = require("mongoose");

const User = require("./userdb.js");
const Game = require("./gamedb.js");

const url = "mongodb://localhost:27017/quizProyectoHalloween";

mongoose.connect(url, function(err){
    if (err) throw err;
    console.log("Conexión correcta");
});

// let user = {
//     _id: new mongoose.Types.ObjectId(),
//     email: 'totopauta@gmail.com',
//     password: '987654321',
//     nickname: 'Pau'
// };

// let newUser = new User (user);
// newUser.save( err => {
//     if(err) throw err;
//     console.log('insercion correcta');
//     mongoose.disconnect();
// })

let game = {
    _id: new mongoose.Types.ObjectId(),
    score: 7,
    correctAnwser: 7,
    incorrectAnwser: 3,
    date: Date,
};

let newGame = new Game (game);
newGame.save( err => {
    if(err) throw err;
    console.log('insercion correcta');
    mongoose.disconnect();
})