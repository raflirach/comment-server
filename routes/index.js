const CommentController = require('../controllers/comment')

const router = require('express').Router() 

router.get('/', (req, res) => {
  res.status(200).json({
    repository: 'https://github.com/raflirach/comment-server'
  })
})

router.get('/comments', CommentController.showAll)
router.post('/comments', CommentController.create)
router.put('/comments/:id', CommentController.reply)

module.exports = router