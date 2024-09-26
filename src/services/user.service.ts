import User from '../models/user.model';
import { hashPassword } from '../utils/helpers';

export async function getUserById(username: string): Promise<User | undefined> {}

export async function createUser(username: string, email: string, password: string): Promise<User> {}

export async function deleteUser(username: string): Promise<void> {}
