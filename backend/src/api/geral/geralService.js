const Ope = require('./ope')
const errorHandler = require('../common/errorHandler')

Ope.methods(['get', 'post', 'put', 'delete'])
Ope.updateOptions({new: true, runValidators: true})
Ope.after('post', errorHandler).after('put', errorHandler)

Ope.route('count', (req, res, next) => {
    Ope.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})



module.exports = Ope