import { EntitySchema } from "typeorm";
import { BaseColumnSchema } from "./base/BaseColumnSchema";
import { getTableOptions } from "../helpers/database";
const tableOpts = getTableOptions('users');
export const User = new EntitySchema(tableOpts);