import { EntitySchemaOptions } from 'typeorm/entity-schema/EntitySchemaOptions';
import {definitions} from '../../entity-definition'
export function getTableOptions(tableName: string): EntitySchemaOptions<any>|null {
    return definitions.find(function(item) {
        return item.tableName === tableName;
    });
}