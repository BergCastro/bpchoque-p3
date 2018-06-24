const TiposOpes = require('./tiposOpes')
const errorHandler = require('../common/errorHandler')

TiposOpes.methods(['get', 'post', 'put', 'delete'])
TiposOpes.updateOptions({new: true, runValidators: true})
TiposOpes.after('post', errorHandler).after('put', errorHandler)

TiposOpes.route('count', (req, res, next) => {
    TiposOpes.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})



module.exports = TiposOpes