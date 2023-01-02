import mongoose from "mongoose";

const schema = mongoose.Schema({
    name:{
        type: String,
        required:[true,'Please add a name'],
    },
    email:{
        type: String,
        required:[true,'Please add a email'],
        unique:true
    },
    message:{
        type: String,
        required:[true,'Please add a message'],
    },
},
{
	timeStamps:true
})

module.exports=mongoose.model('message',schema)