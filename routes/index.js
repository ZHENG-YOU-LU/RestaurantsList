const express = require('express')
const router = express.Router()

// 引入 home 模組程式碼
const home = require('./modules/home') 
router.use('/', home)

// 引入 todos 模組程式碼
const todos = require('./modules/todos')
router.use('/restaurants', todos)

// 引入 users 模組程式碼
const users = require('./modules/users')
router.use('/users', users)

module.exports = router