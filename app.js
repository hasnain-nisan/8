console.log('Task Manager App By nisan')

//mongo db connect

const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect')

const port = 3000

// middleware
app.use(express.json())


app.use('/api/v1/tasks', tasks)


app.listen(port, console.log(`Server is listeniing on port ${port}`))

