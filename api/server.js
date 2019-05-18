const express = require('express')

const server = express()
const cors = require('cors')

// define router here const router = require('./path to router')
const userRouter = require('../users/users-router.js')
const authRouter = require('../auth/auth-router.js')

server.use(express.json())
server.use(cors())

server.get('/', (req, res, next) => {
    res.send(
        `<h1>Server is up and running!!<h1>`
    )
})

// bring in router here server.use('./path to use for endpoint', router)
server.use('/api/users', userRouter)
server.use('/api/auth', authRouter)


module.exports = server