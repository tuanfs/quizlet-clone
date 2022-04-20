const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FolderSchema = Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    user: { type: Schema.ObjectId, ref: 'users', required: true },
    totalCourse: { type: Number, required: true },
    courses: [{ course: { type: Schema.ObjectId, ref: 'courses' } }],
  },
  { timestamp: true }
);

module.exports = mongoose.model('folders', FolderSchema);
