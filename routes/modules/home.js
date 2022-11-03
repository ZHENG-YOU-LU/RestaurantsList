const express = require('express')
const router = express.Router()

const Todo = require('../../models/todo')

// index
router.get('/', (req, res) => {
	function sortSelector(sort) {
		switch (sort) {
			case 'a-z':
				return { name: 'asc' }

			case 'z-a':
				return { name: 'desc' }

			case 'category':
				return { category: 'asc' }

			case 'location':
				return { location: 'asc' }
		}
	}
	const home = true
	let sort = req.query.sort
	const userId = req.user._id
	Todo.find({ userId })
		.lean()
		.sort(sortSelector(sort))
		.then(restaurants => res.render('index', {
			restaurants,
			home,
			option1: sort === 'a-z',
			option2: sort === 'z-a',
			option3: sort === 'category',
			option4: sort === 'location', }))
		.catch(error => console.error(error))
})

module.exports = router