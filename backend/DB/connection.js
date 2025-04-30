const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE)
    .then(() => {
        console.log('db is connected successfully')
    })
    .catch(() => {
        console.log('unable to connect with database')
    })