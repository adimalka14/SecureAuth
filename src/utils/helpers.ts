import bcrypt from 'bcrypt';

const saltRounds: number = 10;

export async function hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, saltRounds);
}

export async function comparePasswords(enteredPassword: string, storedPassword: string): Promise<boolean> {
    return await bcrypt.compare(enteredPassword, storedPassword);
}
