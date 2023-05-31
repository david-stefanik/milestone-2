 //requirement
const mongoose = require('mongoose')
//scema
const { Schema } = mongoose 


const blogScema = new Schema({
    id:{type:Number},
    name:{type:String},
    post:{type:String}
})
const Blog =mongoose.model('Blog',blogScema)
module.exports=Blog