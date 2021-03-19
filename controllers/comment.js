const Comment = require('../models/comment')
const { ObjectID } = require('mongodb');

class CommentController {
  static async showAll(req, res, next) {
    try {
      const comments = await Comment.findAll()
      return res.status(200).json(comments)
    } catch (err) {
      next(err)
    }
  }

  static async create(req, res, next) {
    try {
      const { name, message } = req.body
      const comment = await Comment.create({ 
        name,
        message,
        createdAt: new Date()
      })
      console.log(comment);
      return res.status(201).json(comment.ops[0])
    } catch (err) {
      next(err)
    }
  }

  static async reply(req, res, next) {
    try {
      const { id } = req.params
      const _id = ObjectID(id)
      const { name, message } = req.body
      const comment = await Comment.reply(_id, { 
        name, 
        message,
        createdAt: new Date() 
      })
      console.log(comment);
      res.status(200).json('ok')
    } catch (err) {
      next(err)
    }
  }
}

module.exports = CommentController