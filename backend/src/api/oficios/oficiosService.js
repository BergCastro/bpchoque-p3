const Oficios = require('./oficios')
const errorHandler = require('../common/errorHandler')

Oficios.methods(['get', 'post', 'put', 'delete'])
Oficios.updateOptions({new: true, runValidators: true})
Oficios.after('post', errorHandler).after('put', errorHandler)

Oficios.route('count', (req, res, next) => {
    Oficios.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})



module.exports = Oficios