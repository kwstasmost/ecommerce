import { IProduct } from "./product";

export interface IPagination {
    count: number;
    data: IProduct[];
    pageIndex: number;
    pageSize: number;
}