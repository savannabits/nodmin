import { PaginationAwareObject } from "../src/helpers/pagination";

declare module "typeorm" {
    interface SelectQueryBuilder<Entity> {
        paginate(per_page: number, current_page?: number|null): Promise<PaginationAwareObject>;
    }
}