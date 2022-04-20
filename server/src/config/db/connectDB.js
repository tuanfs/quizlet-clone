const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://tuanfs:tuanfs@cluster0.a3rkv.mongodb.net/quizlet-clone?retryWrites=true&w=majority'
    )

    // await mongoose.connect('mongodb://localhost:27017/quizlet-database')
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDB
