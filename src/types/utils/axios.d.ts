import { AxiosInstance, AxiosRequestConfig } from "axios";
import { QuotationResponse } from "../api/quotation";


export interface PublicAxiosInstance extends AxiosInstance {
    (config: AxiosRequestConfig): PublicAxiosPromise;
}

export interface PublicAxiosResponse<T = any> extends Promise<T> {
}

export interface PublicAxiosPromise<T = QuotationResponse> extends Promise<T> {
}



/**
 * 继承axios原本声明
 * 那么这样在前方取值是result.data.xxxxx了
 */
// export interface PublicAxiosResponse<T = QuotationResponse> extends Promise<AxiosResponse<T>> { }
