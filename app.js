const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override') // 載入 method-override
const flash = require('connect-flash')
const routes = require('./routes') // 引用路由器
const usePassport = require('./config/passport')

require('./config/mongoose')
const app = express()
const PORT = 3000

app.engine('handlebars' ,exphbs({ defaultLayout:'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({
	secret: 'ThisIsMySecret',
	resave: false,
	saveUninitialized: true
}))

// 設定每一筆請求都會透過 methodOverride 進行前置處理
app.use(methodOverride('_method'))

usePassport(app) //這條要寫在 路由 app.use(routes) 之前

app.use(flash())

app.use((req, res, next) => {
	res.locals.isAuthenticated = req.isAuthenticated()
	res.locals.user = req.user
	res.locals.success_msg = req.flash('success_msg')
	res.locals.warning_msg = req.flash('warning_msg')
	next()
})

app.use(routes) // 將 request 導入路由器

app.listen(PORT ,() => {
	console.log(`Express is running on http://localhost:${PORT}`)
})