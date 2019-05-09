const express = require('express')

const server = express()

// define router here const router = require('./path to router')

server.use(express.json())

server.get('/', (req, res, next) => {
    res.send(
        `<h1>Server is up and running!!<h1>`
    )
})

// bring in router here server.use('./path to use for endpoint', router)

module.exports = server