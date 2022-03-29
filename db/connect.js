const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://Nisan:1234@nodeexpressproject.bnwgo.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority'

const connectDB = (url) => {
    return mongoose.connect(url)
}

module.exports = connectDB