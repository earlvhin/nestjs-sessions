import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            id: 1,
            name: 'Marius',
            username: 'marius',
            password: 'pass'
        },
        {
            id: 2,
            name: 'Morris',
            username: 'morris',
            password: 'pass1'
        }
    ];

    async findOne(username): Promise<User | undefined> {
        return this.users.find(user => user.username === username)
    }
}
