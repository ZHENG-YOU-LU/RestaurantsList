const express = require('express')
const restaurantList = require('./restaurant.json')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')

app.engine('handlebars' ,exphbs({ defaultLayout:'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// index
app.get('/' , (req ,res) => {
	res.render('index' , {restaurants : restaurantList.results})
})

// search
app.get('/search' ,(req ,res) => {
	const keyword = req.query.keyword
	const restaurants = restaurantList.results.filter( restaurant => {
		return restaurant.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
	})
	res.render('index', {restaurants : restaurants , keyword : keyword})
})

// show
app.get('/restaurants/:restaurant_id', (req, res) => {
	const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
	res.render('show', { restaurant : restaurant })
})

app.listen(port ,() => {
	console.log(`Express is running on http://localhost/${port}`)
})