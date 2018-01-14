const restful = require('node-restful')
const mongoose = restful.mongoose
const Schema = mongoose.Schema




const tipoTesteSchema = new Schema({
    nome: { type: String, uppercase: true },
    descricao: { type: String, uppercase: true },
    provas: []
})


module.exports = restful.model('TipoTeste', tipoTesteSchema)