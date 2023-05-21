const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')




require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI)
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )
  
try {
    sequelize.authenticate() 
    console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
} catch(err) {
    console.log(`Unable to connect to PG: ${err}`) 
}



app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to our blog'
    })})



    app.listen(process.env.PORT, () => {
        console.log( ` blog on port: ${process.env.PORT}`  )
    })