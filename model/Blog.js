const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title : {
        type : String ,
        required : true
    } ,
    description : {
        type : String ,
        required : true
    } , 
    category : {
        type : String ,
        required : true
    } 
    
} , {
    timestamps : true
})

const Blog = mongoose.model("blogs" , blogSchema)

module.exports = Blog