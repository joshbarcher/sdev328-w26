import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import users from '../repo/users.repo.js';

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

passport.use(new Strategy(options, (payload, done) => {
    const user = users.find(el => el.username === payload.username);

    if (!user) done(null, false);
    else done(null, user);
}))