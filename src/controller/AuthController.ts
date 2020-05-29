import { User } from '../entity/User';
import * as jwt from 'jsonwebtoken'
export class AuthController {
    generateWebToken(user: User) {
        let payload = {
            username: user.username,
            id: user.id,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            activated: user.activated
        }
        return jwt.sign(payload,process.env.APP_SECRET,{
            expiresIn: (60*60),
        });
    }    
}