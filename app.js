const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override') // 載入 method-override
const routes = require('./routes')

require('./config/mongoose')
const app = express()

app.engine('handlebars' ,exphbs({ defaultLayout:'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))

// 設定每一筆請求都會透過 methodOverride 進行前置處理
app.use(methodOverride('_method'))

app.use(routes)

app.listen(3000 ,() => {
	console.log(`Express is running on http://localhost/${3000}`)
})