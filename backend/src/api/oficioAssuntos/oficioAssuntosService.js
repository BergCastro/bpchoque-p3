const OficioAssuntos = require('./oficioAssuntos')
const errorHandler = require('../common/errorHandler')

OficioAssuntos.methods(['get', 'post', 'put', 'delete'])
OficioAssuntos.updateOptions({new: true, runValidators: true})
OficioAssuntos.after('post', errorHandler).after('put', errorHandler)

OficioAssuntos.route('count', (req, res, next) => {
    OficioAssuntos.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})



module.exports = OficioAssuntos