const mongoose = require('mongoose')
mongoose.set("strictQuery", false)

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
  } catch(err) {
    console.log(err)
  }
}

module.exports = connectDB