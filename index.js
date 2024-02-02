import express from "express"
import cors from "cors"
import passport from "passport"
import cookieSession from "cookie-session"
import dotenv from "dotenv"
import authRoute from "./routes/auth.js"
import './passport.js';
dotenv.config()
const app = express();

app.use(
    cookieSession({
        name: "session",
        keys:["cyberwolve"],
        maxAge:24*24*60*100
    })
)

app.use(passport.initialize())
app.use(passport.session())


app.use(cors(
    {
        origin:"http://localhost:3000",
        methods:"GET,POST,PUT,DELETE",
        credentials:true
    }
))

app.use("/auth",authRoute)

app.listen(8080,()=>{
    console.log("Server is running on PORT: 8080");
})