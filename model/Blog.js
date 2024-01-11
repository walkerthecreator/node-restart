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
    }  ,
    postedBy : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "users"
    }
    
} , {
    timestamps : true
})

const Blog = mongoose.model("blogs" , blogSchema)

module.exports = Blog