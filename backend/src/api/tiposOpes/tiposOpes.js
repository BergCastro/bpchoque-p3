const restful = require('node-restful')
const mongoose = restful.mongoose
const Schema = mongoose.Schema


const tipoOpeSchema = new Schema({
    nome: { type: String, required: true},
    referencia: String,
    local: String,
    missaoDescricao: String,
    horaQuartel: String,
    horaLocal: String,
    efetivoDescricao: String,
    equipamento: String,
    prescricoes: String   
})

module.exports = restful.model('TipoOpe', tipoOpeSchema)