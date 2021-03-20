const router = require('express').Router() 

const validation = require('../middlewares/validation')
const CommentController = require('../controllers/comment')

router.get('/', CommentController.showAll)
router.post('/', validation, CommentController.create)
router.put('/:id', validation, CommentController.reply)

module.exports = router