const mongoose = require("mongoose");

const objectSchema = {
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        match: [/.+\@.+\..+/, 'Por favor ingrese un correo válido'] // <- Validación regexp para correo
    },
    password: String,
    nickname: String
}

const userSchema = mongoose.Schema(objectSchema)
module.exports = mongoose.model('User', userSchema)