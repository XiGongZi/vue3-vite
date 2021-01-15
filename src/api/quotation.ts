import { QuotationPromise } from '@/types/api/quotation'
import request from '../utils/axios/index'

export function requestQuotation() {
    return request({
        url: 'https://api.66mz8.com/api/quotation.php',
        params: {
            format: 'json'
        },
        method: 'get',
    }) as QuotationPromise
}