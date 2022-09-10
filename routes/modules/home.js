const express = require('express')
const router = express.Router()

const Todo = require('../../models/todo')

// index
router.get('/', (req, res) => {
	Todo.find()
		.lean()
		.then(restaurants => res.render('index', { restaurants }))
		.catch(error => console.error(error))
})

module.exports = router