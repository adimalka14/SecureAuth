import passport from 'passport';
import passportLocal from 'passport-local';
import { comparePasswords } from '../utils/helpers';
import { findUserByUsername } from '../models/users';

const LocalStrategy = passportLocal.Strategy;

passport.use(
    new LocalStrategy(async (username: string, password: string, done) => {
        const user = await findUserByUsername(username);

        if (!user) {
            return done(null, false, { message: 'User not found' });
        }

        const isMatch = await comparePasswords(password, user.password);
        if (!isMatch) {
            return done(null, false, { message: 'Incorrect password' });
        }

        return done(null, user);
    })
);

passport.serializeUser((user: any, done) => {
    done(null, user.username);
});

passport.deserializeUser(async (username: string, done) => {
    const user = await findUserByUsername(username);
    done(null, user);
});

export default passport;
