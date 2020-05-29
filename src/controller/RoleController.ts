import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Role} from "../entity/Role";

export class RoleController {

    private repo = getRepository(Role);

    async all(request: Request, response: Response, next: NextFunction) {
        let results = await this.repo.createQueryBuilder('role')
        .leftJoinAndSelect("role.permissions", "permission")
        .paginate(request.query.per_page||10, request.query.page||1);
        return response.status(200).apiResponse(true, "Get all roles", results);
    }

    async one(request: Request, response: Response, next: NextFunction) {
        let model = await this.repo.findOne(request.params.id);
        return response.status(200).apiResponse(true, `Get role ${model.id}`, model);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        try {
            let res = await this.repo.save(request.body);
            return response.status(200).apiResponse(true, "Role saved successfully",res);
        } catch(error) {
            console.log(error)
            return response.status(400).apiResponse(true, error.message || "server error",error);
        }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let model = await this.repo.findOne(request.params.id);
        await this.repo.remove(model);
        return response.apiResponse(true,"Role deleted.",model);
    }

}