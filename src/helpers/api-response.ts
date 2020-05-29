import { Response } from 'express';
export function apiResponse(res: Response,success: boolean, message?: string, payload?: any) {
    if (!message) message = "Success";
    if (!payload) payload = null;
    return res.json({
        success,
        message,
        payload,
    });
}

export interface ApiResponse {
    success: boolean,
    message?: string|null,
    payload?: object|Array<any>|any,
}