import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private _user: UsersService) {}

    async validateUser(username: string, password: string): Promise<any> {

        const user = await this._user.findOne(username);

        if (user && user.password === password) {
            const { password, username, ...rest} = user;
            return rest;
        }

        return null;
    }
}
