const express = require('express')

module.exports = function (server) {
    // API Routessss
    const router = express.Router()
    server.user('/api', router)

    // TODO Routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')


}