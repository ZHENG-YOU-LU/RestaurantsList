const express = require('express')
const router = express.Router()

// 引入 home 模組程式碼
const home = require('./modules/home') 

// 引入 restaurants 模組程式碼
const restaurants = require('./modules/restaurants')

// 引入 users 模組程式碼
const users = require('./modules/users')

const auth = require('./modules/auth')

const { authenticator } = require('../middleware/auth')

router.use('/restaurants', authenticator, restaurants)
router.use('/users', users)
router.use('/auth', auth)
router.use('/', authenticator, home)

module.exports = router