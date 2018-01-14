const Prova = require('./prova')
const errorHandler = require('../common/errorHandler')

Prova.methods(['get', 'post', 'put', 'delete'])
Prova.updateOptions({new: true, runValidators: true})
Prova.after('post', errorHandler).after('put', errorHandler)

Prova.route('count', (req, res, next) => {
    Prova.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})


module.exports = Prova