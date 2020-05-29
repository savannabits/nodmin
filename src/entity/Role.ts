import {EntitySchema, EntitySchemaRelationOptions} from "typeorm";
import { getTableOptions } from "../helpers/database";
const tableOptions = getTableOptions('roles');
export const Role = new EntitySchema(tableOptions);
