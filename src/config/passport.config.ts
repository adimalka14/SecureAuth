import passport from 'passport';
import passportLocal from 'passport-local';
import { comparePasswords } from '../utils/helpers';
import { getUserById } from '../services/user.service';

const LocalStrategy = passportLocal.Strategy;

passport.use(
    new LocalStrategy(async (email: string, password: string, done) => {
        const user = await getUserById(email);

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
    done(null, user._id);
});

passport.deserializeUser(async (username: string, done) => {
    const user: IUser | undefined = await getUserById(username);

    if (!user) {
        return done(null, false);
    }

    return done(null, user);
});

export default passport;
