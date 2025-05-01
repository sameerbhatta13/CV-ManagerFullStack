const express = require('express')
require('dotenv').config()
const cors = require('cors')

require('./DB/connection')

//routes import
const cvRoute = require('./src/CVCollector/CV.routes')
const interviewerRoute = require('./src/Interviewer/Interviewer.routes')

const app = express()
let port = process.env.PORT

app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174', `http://${process.env.IP_ADDRESS}:5173`], // Frontend URL
    methods: ['POST', 'PUT', 'GET', 'DELETE'],
    credentials: true,
}))

//middleware
app.use(express.json({}))
app.use('api/image', express.static('public/uploads'))


//routes middleware
app.use('/api', cvRoute)
app.use('/api', interviewerRoute)


app.listen(port, () => {
    console.log(`server is running at :${port}`)
})