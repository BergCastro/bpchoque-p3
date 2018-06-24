const restful = require('node-restful')
const mongoose = restful.mongoose
const Schema = mongoose.Schema


const oficiosSchema = new Schema({
    numero: { type: String, required: true},
    assunto: String,
    referencia: String,
    anexo: String,
    data: Date,
    destino: String,
    conteudo: String,
    responsavel: String,
      
})

module.exports = restful.model('Oficios', oficiosSchema)