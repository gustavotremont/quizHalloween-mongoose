const mongoose = require("mongoose");

const User = require("./models/userdb.js");
const Game = require("./models/gamedb.js");
const GameResult = require("./models/gameResultdb.js")

const url = "mongodb://localhost:27017/quizProyectoHalloween";

/////////////////////////////////////CONEXION
const mongoConnect = async () => {
    mongoose.connect(url, function(err){
        if (err) throw err;
        console.log("Conexión correcta");
    });
}

/////////////////////////////////////CREACION DE USUARIO
const createUser = async(email, password, nickname) => {
    mongoConnect();
    
    let user = {
        _id: new mongoose.Types.ObjectId(),
        email: email,
        password: password,
        nickname: nickname
    };

    let newUser = new User (user);
    await newUser.save()
    mongoose.disconnect();
}

// createUser('robertocarlos@gmail.com', '123456789', 'muchaputeria')

/////////////////////////////////////QUIZ ATRIFICIAL

const quiz = [
    {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Who was the mascot of SEGA before &quot;Sonic the Hedgehog&quot;?",
        "correct_answer": "Alex Kidd",
        "incorrect_answers": [
            "Opa Opa",
            "NiGHTS",
            "Ristar"
        ]
    },
    {
    "category": "Entertainment: Video Games",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which was the first video game to be produced by development company Rare?",
    "correct_answer": "Slalom",
    "incorrect_answers": [
    "R.C. Pro-Am",
    "Donkey Kong Country",
    "Battletoads"
    ]
    },
    {
    "category": "Entertainment: Video Games",
    "type": "multiple",
    "difficulty": "medium",
    "question": "What happened to Half-Life 2 prior to its release, which resulted in Valve starting over the development of the game?",
    "correct_answer": "The source code got leaked",
    "incorrect_answers": [
    "They weren&#039;t satisfied with the result",
    "The story was not good enough",
    "Way too many bugs to be fixed"
    ]
    },
    {
    "category": "Entertainment: Video Games",
    "type": "multiple",
    "difficulty": "medium",
    "question": "In the original DOOM games, which of the following demons is a recolor of the Baron of Hell, but is weaker than the Baron?",
    "correct_answer": "Hell Knight",
    "incorrect_answers": [
    "Mancubus",
    "Pinky",
    "Arch-Vile"
    ]
    },
    {
    "category": "Entertainment: Video Games",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which town was Seamus &quot;Sledge&quot; Cowden from &quot;Tom Clancy&#039;s Rainbow Six Siege&quot; born in?",
    "correct_answer": "John O&#039;Groats",
    "incorrect_answers": [
    "Brawl",
    "Kearvaig",
    "Talmine"
    ]
    },
    {
    "category": "Entertainment: Video Games",
    "type": "multiple",
    "difficulty": "medium",
    "question": "What is the full name of the protagonist from the indie adventure game &quot;Night in the Woods&quot;?",
    "correct_answer": "Margaret Borowski",
    "incorrect_answers": [
    "Marlena Woborski",
    "Milena Catharina",
    "Katia Managan"
    ]
    },
    {
    "category": "Entertainment: Video Games",
    "type": "multiple",
    "difficulty": "medium",
    "question": "In &quot;Call of Duty: Zombies&quot;, what group does Doctor Maxis work for?",
    "correct_answer": "Group 935",
    "incorrect_answers": [
    "Group Reanimate",
    "Group Rezurrection",
    "Division 9"
    ]
    },
    {
    "category": "Entertainment: Video Games",
    "type": "multiple",
    "difficulty": "medium",
    "question": "In &quot;PUBATTLEGROUNDS&quot; what is the name of the Military Base island?",
    "correct_answer": "Sosnovka",
    "incorrect_answers": [
    "Novorepnoye",
    "Mylta",
    "Yasnaya"
    ]
    },
    {
    "category": "Entertainment: Video Games",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which genre is the Touhou Project associated with?",
    "correct_answer": "Shoot &#039;em up (bullet-hell) &amp; Fighting",
    "incorrect_answers": [
    "Turn-Based Strategy",
    "MMORPG",
    "Building "
    ]
    },
    {
    "category": "Entertainment: Video Games",
    "type": "multiple",
    "difficulty": "medium",
    "question": "In &quot;Resident Evil 2&quot;, which virus was William Birkin mutated by?",
    "correct_answer": "G-Virus",
    "incorrect_answers": [
    "T-Virus",
    "C-Virus",
    "E-Virus"
    ]
    }
];
const newQuiz = quiz.map( ({question, correct_answer, incorrect_answers}) => {
    return {
        question: question,
        selectAnswer: correct_answer,
        correctAnswer: correct_answer,
        incorrectAnswers: incorrect_answers,
        correct: true
    }
});

// /////////////////////////////////////CREACION DE PARTIDA Y RESULTADO

const createGame = async(quiz, score, id_user) => {
    await mongoConnect();
    
    let game = {
        _id: new mongoose.Types.ObjectId(),
        score: score,
        id_user: id_user
    };

    let newGame = new Game (game);
    const currectGame = await newGame.save();

    let gameResult = {
        _id: new mongoose.Types.ObjectId(),
        questions: quiz,
        id_game: currectGame._id
    };

    let newGameResult = new GameResult (gameResult);
    await newGameResult.save();

    await User.findByIdAndUpdate(currectGame.id_user, { "$push": { "games": currectGame._id}});

    // const currectUser = await User.findById(currectGame.id_user)
    // currectUser.games = currectUser.games.concat(currectGame._id);
    // await currectUser.save()
    mongoose.disconnect();
}

createGame(newQuiz, 3, '618bc378a11777c17c5a3e71')

//   Game.find({
//         id_user: "618ad3487d1a07e75d6a0cda"
//     })
//     .exec(function(err, games){
//         if (err) throw err;
//         console.log(games);
//         mongoose.disconnect();
//     }); 