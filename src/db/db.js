const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGODB_CONNECTION, {
        useNewUrlParser: true,
        useCreateIndex: true
    },
    () => console.log('Connected to MongoDB')
)