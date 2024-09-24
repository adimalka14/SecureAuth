import { hashPassword } from '../utils/helpers';

export interface IUser {
    username: string;
    password: string;
    roles: string[];
}

const users: IUser[] = [];

export async function findUserByUsername(username: string): Promise<IUser | undefined> {
    return users.find((user) => user.username === username);
}

export async function createUser(username: string, password: string, roles: string[] = ['user']): Promise<IUser> {
    const newUser: IUser = {
        username,
        password,
        roles,
    };
    users.push(newUser);
    return newUser;
}

export async function deleteUser(username: string): Promise<void> {
    const index = users.findIndex((user) => user.username === username);

    if (index !== -1) {
        users.splice(index, 1);
    } else {
        throw new Error('User not found');
    }
}

let hashedPassword = '';

(async () => {
    hashedPassword = await hashPassword('1234');
    await createUser('admin', hashedPassword, ['admin']);
})();

export { users };
