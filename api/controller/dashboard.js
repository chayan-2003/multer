import User from "../models/User.js";

export const dashboard=async(req,res)=>{
    try
    {
        const users=await User.find();
        res.status(200).json({
            status:'success',
            data:{
                users

               
            }
        });
    }
    catch(err){
        res.status(400).json({
            status:'fail',
            message:err.message || 'Unable to get users'
        });
    }
}