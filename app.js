const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const db = require('./util/database')
const app = express()

app.set('view engine','ejs')
app.set('views','views')
app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname ,'public')))

db.execute('SELECT * FROM userdata')
.then((result) =>console.log(result[0]))
.catch((err) => console.log(err))


const formRoutes = require('./routes/formroutes')
const firstRouter = require('./routes/first')

app.use(formRoutes)
app.use(firstRouter)
app.listen(3000)