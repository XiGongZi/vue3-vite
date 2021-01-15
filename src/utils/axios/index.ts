import { PublicAxiosInstance } from '@/types/utils/axios'
import axios from 'axios'

const service = axios.create({})

// Request interceptors
service.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)

// Response interceptors
service.interceptors.response.use(
    (response) => {
        return Promise.resolve(response.data)
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default service as PublicAxiosInstance