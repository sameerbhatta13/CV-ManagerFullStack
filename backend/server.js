const express = require('express')
require('dotenv').config()

require('./DB/connection')

//routes import
const cvRoute = require('./src/CVCollector/CV.routes')

const app = express()
let port = process.env.PORT

//middleware
app.use(express.json({}))
app.use('api/image', express.static('public/uploads'))


//routes middleware
app.use('/api', cvRoute)


app.listen(port, () => {
    console.log(`server is running at :${port}`)
})