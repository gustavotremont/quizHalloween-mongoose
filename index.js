const mongoose = require("mongoose");

const User = require("./mongoSchemas/userdb.js");
const Game = require("./mongoSchemas/gamedb.js");
const GameResult = require("./mongoSchemas/gameResultdb.js")

const url = "mongodb://localhost:27017/quizProyectoHalloween";

mongoose.connect(url, function(err){
    if (err) throw err;
    console.log("Conexión correcta");
});

/////////////////////////////////////CREACION DE USUARIO

// let user = {
//     _id: new mongoose.Types.ObjectId(),
//     email: 'albertoveracrux@gmail.com',
//     password: '123456789',
//     nickname: 'elMacho'
// };

// let newUser = new User (user);
// newUser.save( err => {
//     if(err) throw err;
//     console.log('insercion correcta');
//     mongoose.disconnect();
// })

/////////////////////////////////////CREACION DE PARTIDA

// let game = {
//     _id: new mongoose.Types.ObjectId(),
//     score: 8,
//     id_user: '618ad5a13c89be67729c7f9d'
// };

// let newGame = new Game (game);
// newGame.save( err => {
//     if(err) throw err;
//     console.log('insercion correcta');
//     mongoose.disconnect();
// })

/////////////////////////////////////QUIZ ATRIFICIAL

// const quiz = [
//     {
//         "category": "Entertainment: Video Games",
//         "type": "multiple",
//         "difficulty": "medium",
//         "question": "Who was the mascot of SEGA before &quot;Sonic the Hedgehog&quot;?",
//         "correct_answer": "Alex Kidd",
//         "incorrect_answers": [
//             "Opa Opa",
//             "NiGHTS",
//             "Ristar"
//         ]
//     },
//     {
//     "category": "Entertainment: Video Games",
//     "type": "multiple",
//     "difficulty": "medium",
//     "question": "Which was the first video game to be produced by development company Rare?",
//     "correct_answer": "Slalom",
//     "incorrect_answers": [
//     "R.C. Pro-Am",
//     "Donkey Kong Country",
//     "Battletoads"
//     ]
//     },
//     {
//     "category": "Entertainment: Video Games",
//     "type": "multiple",
//     "difficulty": "medium",
//     "question": "What happened to Half-Life 2 prior to its release, which resulted in Valve starting over the development of the game?",
//     "correct_answer": "The source code got leaked",
//     "incorrect_answers": [
//     "They weren&#039;t satisfied with the result",
//     "The story was not good enough",
//     "Way too many bugs to be fixed"
//     ]
//     },
//     {
//     "category": "Entertainment: Video Games",
//     "type": "multiple",
//     "difficulty": "medium",
//     "question": "In the original DOOM games, which of the following demons is a recolor of the Baron of Hell, but is weaker than the Baron?",
//     "correct_answer": "Hell Knight",
//     "incorrect_answers": [
//     "Mancubus",
//     "Pinky",
//     "Arch-Vile"
//     ]
//     },
//     {
//     "category": "Entertainment: Video Games",
//     "type": "multiple",
//     "difficulty": "medium",
//     "question": "Which town was Seamus &quot;Sledge&quot; Cowden from &quot;Tom Clancy&#039;s Rainbow Six Siege&quot; born in?",
//     "correct_answer": "John O&#039;Groats",
//     "incorrect_answers": [
//     "Brawl",
//     "Kearvaig",
//     "Talmine"
//     ]
//     },
//     {
//     "category": "Entertainment: Video Games",
//     "type": "multiple",
//     "difficulty": "medium",
//     "question": "What is the full name of the protagonist from the indie adventure game &quot;Night in the Woods&quot;?",
//     "correct_answer": "Margaret Borowski",
//     "incorrect_answers": [
//     "Marlena Woborski",
//     "Milena Catharina",
//     "Katia Managan"
//     ]
//     },
//     {
//     "category": "Entertainment: Video Games",
//     "type": "multiple",
//     "difficulty": "medium",
//     "question": "In &quot;Call of Duty: Zombies&quot;, what group does Doctor Maxis work for?",
//     "correct_answer": "Group 935",
//     "incorrect_answers": [
//     "Group Reanimate",
//     "Group Rezurrection",
//     "Division 9"
//     ]
//     },
//     {
//     "category": "Entertainment: Video Games",
//     "type": "multiple",
//     "difficulty": "medium",
//     "question": "In &quot;PUBATTLEGROUNDS&quot; what is the name of the Military Base island?",
//     "correct_answer": "Sosnovka",
//     "incorrect_answers": [
//     "Novorepnoye",
//     "Mylta",
//     "Yasnaya"
//     ]
//     },
//     {
//     "category": "Entertainment: Video Games",
//     "type": "multiple",
//     "difficulty": "medium",
//     "question": "Which genre is the Touhou Project associated with?",
//     "correct_answer": "Shoot &#039;em up (bullet-hell) &amp; Fighting",
//     "incorrect_answers": [
//     "Turn-Based Strategy",
//     "MMORPG",
//     "Building "
//     ]
//     },
//     {
//     "category": "Entertainment: Video Games",
//     "type": "multiple",
//     "difficulty": "medium",
//     "question": "In &quot;Resident Evil 2&quot;, which virus was William Birkin mutated by?",
//     "correct_answer": "G-Virus",
//     "incorrect_answers": [
//     "T-Virus",
//     "C-Virus",
//     "E-Virus"
//     ]
//     }
// ];

/////////////////////////////////////CREACION DE RESULTADO

// const newQuiz = quiz.map( ({question, correct_answer, incorrect_answers}) => {
//     return {
//         question: question,
//         selectAnswer: correct_answer,
//         correctAnswer: correct_answer,
//         incorrectAnswers: incorrect_answers,
//         correct: true
//     }
// });

// let gameResult = {
//     _id: new mongoose.Types.ObjectId(),
//     questions: newQuiz,
//     id_game: '618ad91a6b1a94177fa66464'
// };

// let newGameResult = new GameResult (gameResult);
// newGameResult.save( err => {
//     if(err) throw err;
//     console.log('insercion correcta');
//     mongoose.disconnect();
// });

  Game.find({
        id_user: "618ad3487d1a07e75d6a0cda"
    })
    .exec(function(err, games){
        if (err) throw err;
        console.log(games);
        mongoose.disconnect();
    }); 