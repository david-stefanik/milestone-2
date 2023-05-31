const express = require("express");
const router =express.router();
const post = require("../blog_model");

router.route("/create").post((req,res)=>{
    const title=req.body.title;
    const content = req.body.content;
    const newpost =new post({
        title,
        content
    });
    newpost.save() ;

})
router.rout("/blog").get((req,res)=>{
    post.find()
    .then(foundposts=>res.json(foundposts))
})