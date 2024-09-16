import { hashPassword } from '../utils/helpers';

interface User {
    username: string;
    password: string;
    roles: string[];
}

const users: User[] = [];

export async function findUserByUsername(username: User) {
    return users.find((user) => user.username === username);
}

export async function createUser(username: string, password: string, roles: string[] = ['user']): Promise<User> {
    const newUser: User = {
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

export { users as User };
