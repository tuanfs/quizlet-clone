const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassSchema = Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    isMemberAddTerm: { type: Boolean },
    isMemberAddMember: { type: Boolean },
    user: { type: Schema.ObjectId, ref: 'users', required: true },
  },
  { timestamp: true }
);

module.exports = mongoose.model('classes', ClassSchema);
