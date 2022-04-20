const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    fullName: {type: String, required: true},
    email: {type: String, required: true},
    birthday: {type: Date, required: true},
    password: {type: String, required: true},
    avatar: {type: String}
  },
  {timestamp: true}
)

module.exports = mongoose.model('users', UserSchema)
