const restful = require('node-restful')
const mongoose = restful.mongoose
const Schema = mongoose.Schema



const oficiosStatus = new Schema({
    status: String,
    dataHora: Date,
    responsavel: String,


})

const oficiosSchema = new Schema({
    numero: { type: String, required: true},
    assunto: String,
    referencia: String,
    anexo: String,
    data: Date,
    destino: String,
    conteudo: String,
    statusAtual: String,
    status: [oficiosStatus]
      
})

module.exports = restful.model('Oficios', oficiosSchema)