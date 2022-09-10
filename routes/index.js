const express = require('express')
const router = express.Router()

// 引入 home 模組程式碼
const home = require('./modules/home') 
router.use('/', home)

// 引入 todos 模組程式碼
const todo = require('./modules/todos')
router.use('/restaurants', todo)

module.exports = router