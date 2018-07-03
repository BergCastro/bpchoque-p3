const restful = require('node-restful')
const mongoose = restful.mongoose
const Schema = mongoose.Schema


const tiposOficioSchema = new Schema({
    nome: String,
    referencia: String,
    anexo: String,
    destino: String,
    conteudo: String,
    
          
})

module.exports = restful.model('TiposOficio', tiposOficioSchema)