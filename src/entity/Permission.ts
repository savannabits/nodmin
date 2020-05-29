import {Entity, PrimaryGeneratedColumn, Column, EntitySchema} from "typeorm";
import { BaseColumnSchema } from "./base/BaseColumnSchema";
import { getTableOptions } from "../helpers/database";

export const Permission = new EntitySchema(getTableOptions('permissions'));
