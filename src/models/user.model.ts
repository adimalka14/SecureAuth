import { Schema, model, Model } from 'mongoose';

interface IUser {
    username: string;
    email: string;
    password: string;
    isActive: boolean;
}

interface IUserModel extends Model<IUser> {}

const userModel = new Schema<IUser, IUserModel>(
    {
        username: { type: String, required: [true, 'you must provide a username'], trim: true },
        email: { type: String, unique: true, required: [true, 'you must provide an email'], trim: true },
        password: { type: String, required: [true, 'you must provide a password'], minlength: 4 },
        isActive: { type: Boolean, default: true },
    },
    { timestamps: true }
);

const User = model<IUser, IUserModel>('User', userModel);

export default User;
