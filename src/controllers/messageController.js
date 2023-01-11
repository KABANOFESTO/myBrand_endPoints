import {messageSchema} from "../support/validat"
import Message from "../models/message";
import User from "../models/user"; 

const sendMessage = async (req,res)=>{
    try{
        const validatResult= await messageSchema.validateAsync(req.body);
        const message=new Message({
            name:validatResult.name,
            email:validatResult.email,
            message:validatResult.message
        })
        message.save()
        .then(result=>{
            res.status(200).json({message:'sent successful'
        })
       
        })
    }
    catch (error){
res.status(500).json({error})
    }
}

const getAllMessages=async (req,res)=>{
    User.findOne({
        _id:req.user.id
    }).then((user)=>{

  
    if(user.role.toString()=='admin'){


    Message.find()
    .then(messages=>{
        res.json({messages})
    })
    .catch(error=>res.json(error))

}
else{
    res.json({message:'User Not Authorized'}).status(401)
}})}
const deleteMessage=(req,res)=>{
    const{id}=req.params
    Message.deleteOne({_id:id})
    .then(result=>{
        res.status(200).json(result)
    })
    .catch(error=>console.log(error))
}
module.exports={
    sendMessage,getAllMessages,deleteMessage
}