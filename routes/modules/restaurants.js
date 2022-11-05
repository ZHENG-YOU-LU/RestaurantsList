const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

// search
router.get('/search', (req, res) => {
	if (!req.query.keywords) {
		return res.redirect("/")
	}
	const userId = req.user._id
	const keywords = req.query.keywords
	const keyword = req.query.keywords.trim().toLowerCase()
	return Restaurant.find({ userId })
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
	const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body
	const userId = req.user._id
	return Restaurant.create({
		name,
		name_en,
		category,
		image,
		location,
		phone,
		google_map,
		rating,
		description,
		userId
	 })
		.then(() => res.redirect('/'))
		.catch(err => console.log(err))
})

// show
router.get("/:id", (req, res) => {
	const userId = req.user._id
	const _id = req.params.id
	return Restaurant.findOne({ _id, userId})
		.lean()
		.then(restaurants => res.render("show", { restaurants }))
		.catch(err => console.log(err))
})

// 編輯
router.get("/:id/edit", (req, res) => {
	const userId = req.user._id
	const _id = req.params.id
	return Restaurant.findOne({ _id, userId })
		.lean()
		.then(restaurants => res.render("edit", { restaurants }))
		.catch(err => console.log(err))
})

// 編輯後更新
router.put("/:id", (req, res) => {
	const userId = req.user._id
	const _id = req.params.id
	const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body
	return Restaurant.findOne({_id, userId})
		.then(restaurant => {
			restaurant.name = name
			restaurant.name_en = name_en
			restaurant.category = category
			restaurant.image = image
			restaurant.location = location
			restaurant.phone = phone
			restaurant.google_map = google_map
			restaurant.rating = rating
			restaurant.description = description
			return restaurant.save()
		})
		.then(() => res.redirect(`/restaurants/${_id}`))
		.catch(err => console.log(err))
})

// 刪除
router.delete("/:id", (req, res) => {
	const userId = req.user._id
	const _id = req.params.id
	return Restaurant.findOne({ _id, userId })
		.then(todo => todo.remove())
		.then(() => res.redirect("/"))
		.catch(err => console.log(err))
})

module.exports = router