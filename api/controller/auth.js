import cookieParser from "cookie-parser";

export const auth=async(req,res)=>{
    try{
        const {username,password}=req.body;
        if(!username || !password){
            return res.status(400).json({message:'Username and password are required'});
        }
        if(username==='admin' && password==='admin123'){

            res.cookie('admin','admin',{httpOnly:true ,
                maxAge: 24 * 60 * 60 * 1000 
            });res.status(200).json({message:'Login successful'});


        }
        else{
            res.status(401).json({message:'Invalid credentials'});
        }
    }
    catch(error)
    {
        res.status(500).json({message:error.message || 'Server Error: Unable to login'});
    }
}