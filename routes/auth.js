import express from "express"
import passport from "passport";
const router = express.Router();

router.get("/login/success",(req,res)=>{
    if(req.user)
    {
        res.status(200).json({
            error:false,
            messege:"Logged in",
            user:req.user
        })
    }
    else{
        res.status(403).json({
            error:true,
            messege:"Not Authorized",
        })
    }
})


router.get("/login/failed",(req,res)=>{
    res.status(401).json({
        error:true,
        messege:"Login failed"
    })
})

router.get("/google",passport.authenticate("google",
 {
    scope:["profile","email"]
 }
));

router.get('/google/callback',passport.authenticate("google",{
    successRedirect:"http://localhost:3000/",
    failureRedirect:"login/failed"
}))


router.get("/logout",(req,res)=>{
    req.logout();
    res.redirect(process.env.CLIENT_URL)
})

export default router;