const TiposOficio = require('./tiposOficio')
const errorHandler = require('../common/errorHandler')

TiposOficio.methods(['get', 'post', 'put', 'delete'])
TiposOficio.updateOptions({new: true, runValidators: true})
TiposOficio.after('post', errorHandler).after('put', errorHandler)

TiposOficio.route('count', (req, res, next) => {
    TiposOficio.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})



module.exports = TiposOficio