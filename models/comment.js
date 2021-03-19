const { getDatabase } = require('../config/mongodb')
const comments = getDatabase().collection('comments')

class Comment {
  static findAll() {
    return comments.find().toArray()
  }

  static findOne(filter) {
    return comments.findOne(filter)
  }

  static create(comment){
    return comments.insertOne(comment)
  }

  static reply(_id, comment){
    return comments.updateOne({ _id }, {  
      $push: {
        "replies": comment
      }
    })
  }
}

module.exports = Comment