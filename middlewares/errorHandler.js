const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case "ErrorValidation": 
      res.status(400).json({
        status: 'error',
        errors: err.errors
      })
      break;
    case "ErrorNotFound": 
      res.status(404).json({
        status: 'error',
        errors: 'data not found'
      })
      break;
    default:
      res.status(500).json({
        status: 'error',
        error: err
      })
      break;
  }
}

module.exports = errorHandler