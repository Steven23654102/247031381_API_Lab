// controllers/auth.ts
import { BasicStrategy } from "passport-http";
import passport from "koa-passport";
import { findUserByUsername } from "../models/users";


passport.use(new BasicStrategy(async (username, password, done) => {
  try {
    const user = await findUserByUsername(username);

    if (!user) {
      return done(null, false); 
    }

    if (user.password !== password) {
      return done(null, false); 
    }

    return done(null, user); 
  } catch (err) {
    return done(err);
  }
}));

export { passport };
