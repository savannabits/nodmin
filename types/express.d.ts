declare namespace Express {
    interface Response {
        apiResponse(success: boolean, message?: string|null, payload?: object|Array<any>|any): any;
    }
}