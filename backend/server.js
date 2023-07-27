const express =require ("express")
const mongoose = require('mongoose')


app.use(express.json())

mongoose.connect("mongodb+srv://dstefanik8338:<a0z8p7hIqjgOn8pZ>@clusterproj.7kmrdu2.mongodb.net/")
app.use("/"),require("./routes/blog_controllers")
app.listen(27016,function(){
  console.log("express server is running on port 27017")
})


 