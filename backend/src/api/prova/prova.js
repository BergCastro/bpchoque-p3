const restful = require('node-restful')
const mongoose = restful.mongoose
const Schema = mongoose.Schema


const provaSchema = new Schema({
    nome: { type: String, uppercase: true },
    descricao: { type: String, uppercase: true },
    tipo: { type: String, uppercase: true, enum:['INTEIRO', 'APTO_INAPTO',
            'TEMPO SEG', 'TEMPO MIN'] },
    refInicialMasc: String ,
    refInicialFem: String ,
    refFinalMasc: String,
    refFinalFem: String,
    intervaloRef: String,

})


module.exports = restful.model('Prova', provaSchema)