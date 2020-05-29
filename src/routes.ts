import {UserController} from "./controller/UserController";
import {RoleController} from "./controller/RoleController"
/**<%IMPORTS%>**/
export const Routes = [{
    method: "get",
    route: "/users",
    middleware: [],
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},
{
    method: "get",
    route: "/roles",
    middleware: [],
    controller: RoleController,
    action: "all"
}, {
    method: "get",
    route: "/roles/:id",
    middleware: [],
    controller: RoleController,
    action: "one"
}, {
    method: "post",
    route: "/roles",
    middleware: [],
    controller: RoleController,
    action: "create"
}, {
    method: "put",
    route: "/roles/:id",
    middleware: [],
    controller: RoleController,
    action: "update"
}, {
    method: "delete",
    route: "/roles/:id",
    middleware: [],
    controller: RoleController,
    action: "remove"
}, 
/**###APPEND_ROUTES###*/  
];