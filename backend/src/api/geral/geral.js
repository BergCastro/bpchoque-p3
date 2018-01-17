const restful = require('node-restful')
const mongoose = restful.mongoose
const Schema = mongoose.Schema

const tipos = [
    'GUARDA DE HONRA',
    'GUARDA FÚNEBRE',
    'EVENTO ESPORTIVO'

]



const geralSchema = new Schema({
    comandante: { type: String, required: true },
    subcomandante: { type: String, required: true },
    data: { type: Date,  required: true, default: Date.now() },
    ref: { type: String, required: true},
    missaoTipo: { type: String, required: true, enum: tipos},
    missaoDescricao: { type: String, required: true} ,
    local: {type: String},
    dataMissao: {type: Date},
    horaQuartel: {type: String},
    horaLocal: {type: String},
    efetivoDescricao: { type: String},
    efetivoQuantidade: { type: Number},
    equipamento: {type: String},
    observacoes: {type: String}   
})

module.exports = restful.model('Geral', geralSchema)