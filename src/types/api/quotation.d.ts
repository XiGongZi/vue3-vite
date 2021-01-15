import { PublicAxiosPromise } from "../utils/axios";

interface QuotationResponse {
    /**
    * @description 状态码
    */
    code: number,
    /**
     * @description 返回值
     */
    quotation: string
}


export interface QuotationPromise<T = QuotationResponse> extends PublicAxiosPromise<T> { }
