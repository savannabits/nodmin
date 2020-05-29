import {EntitySchemaColumnOptions} from "typeorm";

export const BaseColumnSchema = {
  id: {
    type: "bigint",
    primary: true,
    generated: true,
  } as EntitySchemaColumnOptions,
  active: {
      type: Boolean,
      default: true,
  } as EntitySchemaColumnOptions,
  createdAt: {
    name: 'created_at',
    type: "timestamp with time zone",
    createDate: true,
  } as EntitySchemaColumnOptions,
  updatedAt: {
    name: 'updated_at',
    type: 'timestamp with time zone',
    createDate: true,
  } as EntitySchemaColumnOptions,
}