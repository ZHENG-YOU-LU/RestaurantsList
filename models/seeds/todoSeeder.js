const mongoose = require('mongoose')
const Todo = require('../todo')
const restaurantList = require("../../restaurant.json").results

require('dotenv').config()
mongoose.connect(process.env.RESTAURANT_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
	console.log('mongodb error!')
})
db.once('open', () => {
	console.log('mongodb connected!')
	
	Todo.create(restaurantList)
		.then(() => {
			console.log("restaurantSeeder done!")
			db.close()
		})
		.catch(err => console.log(err))
})
