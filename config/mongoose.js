const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.RESTAURANT_URI, { useNewUrlParser: true, useUnifiedTopology: true })

console.log(process.env.RESTAURANT_URI)

// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
	console.log('mongodb error!')
})
db.once('open', () => {
	console.log('mongodb connected!')
})

module.exports = db
