const restful = require('node-restful')
const mongoose = restful.mongoose
const Schema = mongoose.Schema


const oficioAssuntosSchema = new Schema({
    nome: String,
          
})

module.exports = restful.model('OficioAssuntos', oficioAssuntosSchema)