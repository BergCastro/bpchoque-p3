const TipoTeste = require('./tipoTeste')
const errorHandler = require('../common/errorHandler')

TipoTeste.methods(['get', 'post', 'put', 'delete'])
TipoTeste.updateOptions({new: true, runValidators: true})
TipoTeste.after('post', errorHandler).after('put', errorHandler)

TipoTeste.route('count', (req, res, next) => {
    TipoTeste.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})


module.exports = TipoTeste