const restful = require('node-restful')
const mongoose = restful.mongoose
const Schema = mongoose.Schema
const AutoIncrement = require('mongoose-sequence')(mongoose)



const oficiosStatus = new Schema({
    status: String,
    dataHora: Date,
    responsavel: String,


})

const oficiosSchema = new Schema({
    numero: { type: Number },
    assunto: String,
    referencia: String,
    anexo: String,
    data: { type: Date, default: () => Date.now()},
    dataMissao: Date,
    destino: String,
    conteudo: String,
    statusAtual: String,
    status: [oficiosStatus]
      
})

oficiosSchema.plugin(AutoIncrement, {inc_field: 'numero'})

module.exports = restful.model('Oficios', oficiosSchema)