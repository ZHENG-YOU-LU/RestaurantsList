const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}
const Restaurant = require('../restaurant')
const User = require('../user')
const restaurantList = require('./restaurant.json').results
const db =require('../../config/mongoose')

const SEED_USER = [{
	name: 'user1',
	email: 'user1@example.com',
	password: '12345678',
	collection: [0, 1, 2]
}, {
	name: 'user2',
	email: 'user2@example.com',
	password: '12345678',
	collection: [3, 4, 5]
}]

db.once('open', () => {
	Promise.all(SEED_USER.map((data) =>
		bcrypt
			.genSalt(10)
			.then(salt => bcrypt.hash(data.password, salt))
			.then(hash => {
				return User.create({
					name: data.name,
					email: data.email,
					password: hash
				})
			})
			.then(user => {
				const restaurants = data.collection.map(index => {
				restaurantList[index].userId = user._id
					return restaurantList[index]
				})
				return Restaurant.create(restaurants)
			})
	))
		.then(() => {
			console.log('restaurantList done.')
			process.exit()
		})
})