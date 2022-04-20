const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = Schema(
  {
    name: { type: String, required: true },
    user: { type: Schema.ObjectId, ref: 'users', required: true },
    description: { type: String },
    total: { type: Number },
    card: [
      {
        term: { type: String, required: true },
        defination: { type: String, required: true },
        isLearn: { type: Boolean, default: false },
        isWrite: { type: Boolean, default: false },
        choiceItem: [
          {
            term: { type: String, required: true },
            defination: { type: String, required: true },
          },
        ],
      },
    ],
  },
  { timestamp: true }
);

module.exports = mongoose.model('courses', CourseSchema);
