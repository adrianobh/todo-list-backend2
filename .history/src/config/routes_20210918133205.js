const express = require('express')

module.exports = function (server) {
    // API Routes
    const router = express.Router()
    server.user('/api', router)

    // TODO Routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')


}