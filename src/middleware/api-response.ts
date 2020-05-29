import { NextFunction } from 'express';
import { Response } from 'express';
import { Request } from 'express';
import { apiResponse } from '../helpers/api-response';
export function apiResponseMiddleware(req: Request, res:Response, next:NextFunction) {
    res.apiResponse = function(success: boolean, message?: string|null, payload?: object|Array<any>|any) {
        return apiResponse(res,success,message,payload);
    }
    next()
}