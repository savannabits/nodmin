import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";

export class UserController {

    private repo = getRepository(User);

    async all(request: Request, response: Response, next: NextFunction) {
        let users = await this.repo.createQueryBuilder('user')
        .leftJoinAndSelect("user.roles","role")
        .paginate(request.query.per_page||10, request.query.page||1);
        return response.status(200).apiResponse(true, "All Users", users);
    }

    async one(request: Request, response: Response, next: NextFunction) {
        let user = await this.repo.findOne(request.params.id);
        return response.status(200).apiResponse(true, `User ${user.id}`,user);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        try {
            let res = await this.repo.save(request.body);
            return response.status(200).apiResponse(true, "User saved successfully",res);
        } catch(error) {
            console.log(error)
            return response.status(400).apiResponse(true, error.message || "server error",error);
        }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.repo.findOne(request.params.id);
        await this.repo.remove(userToRemove);
    }

}