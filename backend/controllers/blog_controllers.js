let express = require(`express`)
let blog = express.Router()

const Blog = require("../models/blog_model")



Blog.get('/',(req,res)=>{
    Blog.find()
    .then(foundBlog=>{
        console.log(foundBlog)
    })
    res.render('index',
    {Blog:Blog})
}
)
Blog