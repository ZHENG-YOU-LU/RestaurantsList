const express = require('express')
const router = express.Router()
const Todo = require('../../models/todo')

// search
router.get('/search', (req, res) => {
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
router.get('/new', (req, res) => {
	res.render('new')
})

router.post('/', (req, res) => {
	Todo.create(req.body)
		.then(() => res.redirect('/'))
		.catch(err => console.log(err))
})

// show
router.get("/:restaurantId", (req, res) => {
	const { restaurantId } = req.params
	Todo.findById(restaurantId)
		.lean()
		.then(restaurants => res.render("show", { restaurants }))
		.catch(err => console.log(err))
})

// 編輯
router.get("/:restaurantId/edit", (req, res) => {
	const { restaurantId } = req.params
	Todo.findById(restaurantId)
		.lean()
		.then(restaurants => res.render("edit", { restaurants }))
		.catch(err => console.log(err))
})

// 編輯後更新
router.put("/:restaurantId", (req, res) => {
	const { restaurantId } = req.params
	Todo.findByIdAndUpdate(restaurantId, req.body)
		//可依照專案發展方向自定編輯後的動作，這邊是導向到瀏覽特定餐廳頁面
		.then(() => res.redirect(`/restaurants/${restaurantId}`))
		.catch(err => console.log(err))
})

// 刪除
router.delete("/:restaurantId", (req, res) => {
	const { restaurantId } = req.params
	Todo.findByIdAndDelete(restaurantId)
		.then(() => res.redirect("/"))
		.catch(err => console.log(err))
})

module.exports = router