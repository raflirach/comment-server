const isValidId = require("../helpers/isValidId")

const validation = async (req, res, next) => {
  try {
    const { id } = req.params
    const { name, message } = req.body
    const errors = {}

    if(id && !isValidId(id)) throw { name: 'ErrorNotFound' }

    if(!name) errors.name = 'name is required'
    else if(typeof name !== 'string') errors.name = 'name must be string'

    if(!message) errors.message = 'message is required'
    else if(typeof message !== 'string') errors.message = 'message must be string'

    if(Object.keys(errors).length > 0) throw { name: 'ErrorValidation', errors }
    else next()
  } catch (err) {
    next(err)
  }
}

module.exports = validation