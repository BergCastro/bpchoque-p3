const restful = require('node-restful')
const mongoose = restful.mongoose
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const tipos = [
    'GUARDA DE HONRA',
    'GUARDA FÚNEBRE',
    'EVENTO ESPORTIVO'

]



const opeSchema = new Schema({
    numero: { type: Number, required: true, unique: true },
    prioridade: {type: String, required: true},
    data: { type: Date,  required: true, default: Date.now() },
    ref: { type: String, required: true},
    missaoTipo: { type: String, required: true},
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

opeSchema.plugin(uniqueValidator, { message: 'Erro, a OPE de número: {VALUE} já existe.' })
module.exports = restful.model('Ope', opeSchema)