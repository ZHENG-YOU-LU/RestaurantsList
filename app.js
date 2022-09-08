const express = require('express')
// const restaurantList = require('./restaurant.json')
const app = express()
const port = 3000
const Todo = require('./models/todo')
const bodyParser = require('body-parser')
require('dotenv').config()
const methodOverride = require('method-override') // 載入 method-override

const mongoose = require('mongoose')
mongoose.connect(process.env.RESTAURANT_URI, { useNewUrlParser:true, useUnifiedTopology:true })

console.log(process.env.RESTAURANT_URI)

const exphbs = require('express-handlebars')

app.engine('handlebars' ,exphbs({ defaultLayout:'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))

// 設定每一筆請求都會透過 methodOverride 進行前置處理
app.use(methodOverride('_method'))

// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
	console.log('mongodb error!')
})
db.once('open', () => {
	console.log('mongodb connected!')
})

// index
app.get('/' , (req ,res) => {
	Todo.find()
	.lean()
		.then(restaurants => res.render('index', { restaurants }))
		.catch(error => console.error(error))
})

// search
app.get('/search' ,(req ,res) => {
	if (!req.query.keywords) {
		return res.redirect("/")
	}

	const keywords = req.query.keywords
	const keyword = req.query.keywords.trim().toLowerCase()
	Todo.find()
		.lean()
		.then(restaurants => {
			const filterRestaurants = restaurants.filter(
				restaurant =>
				 restaurant.name.toLowerCase().includes(keyword) || restaurant.category.includes(keyword)
			)
			res.render("index", { restaurants: filterRestaurants, keywords })
		})
		.catch(err => console.log(err))
})

// new
app.get('/restaurants/new', (req, res) =>{
	res.render('new')
})

app.post('/restaurants', (req, res) =>{
	Todo.create(req.body)
		.then(() => res.redirect('/'))
		.catch(err => console.log(err))
})

// show
app.get("/restaurants/:restaurantId", (req, res) => {
	const { restaurantId } = req.params
	Todo.findById(restaurantId)
		.lean()
		.then(restaurants => res.render("show", { restaurants }))
		.catch(err => console.log(err))
})

// 編輯
app.get("/restaurants/:restaurantId/edit", (req, res) => {
	const { restaurantId } = req.params
	Todo.findById(restaurantId)
		.lean()
		.then(restaurants => res.render("edit", { restaurants }))
		.catch(err => console.log(err))
})

// 編輯後更新
app.put("/restaurants/:restaurantId", (req, res) => {
	const { restaurantId } = req.params
	Todo.findByIdAndUpdate(restaurantId, req.body)
		//可依照專案發展方向自定編輯後的動作，這邊是導向到瀏覽特定餐廳頁面
		.then(() => res.redirect(`/restaurants/${restaurantId}`))
		.catch(err => console.log(err))
})

// 刪除
app.delete("/restaurants/:restaurantId", (req, res) => {
	const { restaurantId } = req.params
	Todo.findByIdAndDelete(restaurantId)
		.then(() => res.redirect("/"))
		.catch(err => console.log(err))
})

app.listen(port ,() => {
	console.log(`Express is running on http://localhost/${port}`)
})