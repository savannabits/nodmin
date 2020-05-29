import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import { registerPagination } from "./helpers/pagination";
import { apiResponseMiddleware } from "./middleware/api-response";
createConnection().then(async connection => {
    // create express app
    const app = express();
    app.use(bodyParser.json());
    app.use(apiResponseMiddleware)
    registerPagination();
    // console.log(require('crypto').randomBytes(64).toString('hex'));
    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](`/api${route.route}`,route.middleware || [], (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(process.env.PORT || 3000);

    console.log("Express server has started on port "+process.env.PORT||3000);

}).catch(error => console.log(error));
