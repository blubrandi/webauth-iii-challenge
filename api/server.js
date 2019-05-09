const express = require('express')

const server = express()

// define router here const router = require('./path to router')
const userRouter = require('../users/users-router.js')

server.use(express.json())

server.get('/', (req, res, next) => {
    res.send(
        `<h1>Server is up and running!!<h1>`
    )
})

// bring in router here server.use('./path to use for endpoint', router)
server.use('/api/users', userRouter)

module.exports = server