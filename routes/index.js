const router = require('express').Router() 
const commentRouter = require('./comment')

router.get('/', (req, res) => {
  res.status(200).json({
    repository: 'https://github.com/raflirach/comment-server'
  })
})

router.use('/comments', commentRouter)

module.exports = router