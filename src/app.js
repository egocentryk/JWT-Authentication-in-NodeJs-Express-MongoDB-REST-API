const express = require('express')
const userRouter = require('./routers/user')

require('dotenv/config');

const port = process.env.PORT

require ('./db/db')

const app = express()

// middleware
app.use(express.urlencoded({
	extended: true
}));
app.use(express.json());
app.use(userRouter)

app.listen(port, () => {
    console.log('Server is running on port ${port}')
})
