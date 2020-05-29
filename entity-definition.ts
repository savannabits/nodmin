import { EntitySchema, OrderByCondition } from "typeorm"
import { EntitySchemaOptions } from "typeorm/entity-schema/EntitySchemaOptions"
import { BaseColumnSchema } from "./src/entity/base/BaseColumnSchema"

export const definitions :Array<EntitySchemaOptions<any>> = [
    //Role
    {
        name: "role",
        tableName: "roles",
        columns: {
            ...BaseColumnSchema,
            name: {
                type: String,
                unique: true,
            },
            displayName: {
                name: "display_name",
                type: String,
                nullable: true,
            },
            description: {
                type: "text",
                nullable: true,
            }
        },
        relations: {
            permissions: {
                type: "many-to-many",
                target: "permission",
                joinTable: true
            },
            users: {
                type: "many-to-many",
                target: "user",
                joinTable: true
            }
        }
    },
    // Permission
    {
        name: "permission",
        tableName: "permissions",
        columns: {
            ...BaseColumnSchema,
            name: {
                type: String,
                unique: true,
            },
            displayName: {
                name: "display_name",
                type: String
            },
            description: {
                type: "text",
                nullable: true,
            }
        },
        relations: {
            roles: {
                type: "many-to-many",
                target: "permission",
                joinTable: true
            }
        }
    },
    // User
    {
        name: "user",
        tableName: "users",
        columns: {
            ...BaseColumnSchema,
            username: {
                type: String,
                unique: true,
            },
            email: {
                type: String,
                unique: true
            },
            firstName: {
                name: "first_name",
                type: String,
            },
            middleName: {
                name: "middle_name",
                type: String,
                nullable: true
            },
            lastName: {
                name: "last_name",
                type: String,
            },
        },
        relations: {
            roles: {
                type: "many-to-many",
                target: "role",
                joinTable: true
            }
        }
    }

    //TODO: Add more tables using the same format
    
]