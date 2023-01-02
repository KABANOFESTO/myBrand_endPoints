import {messageSchema} from "../support/validat"
import Message from "../models/message";

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
    console.log(req.body['role'])

    Message.find()
    .then(messages=>{
        res.json({messages})
    })
    .catch(error=>res.json(error))
}
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