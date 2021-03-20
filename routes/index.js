const CommentController = require('../controllers/comment')
const validation = require('../middlewares/validation')

const router = require('express').Router() 

router.get('/', (req, res) => {
  res.status(200).json({
    repository: 'https://github.com/raflirach/comment-server'
  })
})

router.get('/comments', CommentController.showAll)
router.post('/comments', validation, CommentController.create)
router.put('/comments/:id', validation, CommentController.reply)

module.exports = router