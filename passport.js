import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport  from 'passport';

passport.use(
    new GoogleStrategy({
        clientID:"842504357084-bhud7olotiklor7oeno8mdpjnft9ooch.apps.googleusercontent.com",
        clientSecret:"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",
        callbackURL:"/auth/google/callback",
        scope:["profile","email"],
    },
     function(accessToken, refreshToken, profile, callback){
         callback(null,profile);
     }
    
    )

)

passport.serializeUser((user,done)=>{
    done(null,user);
})



passport.deserializeUser((user,done)=>{
    done(null,user);
})


// export default passport;