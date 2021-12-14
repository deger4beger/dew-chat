import axios from "axios"
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import { IUserRecieve, IUserSend } from '../types/User';
import { IDialog } from '../types/Dialog';
import { isTokenValid } from '../validators/token';

const baseURL = "https://dew-chat.herokuapp.com"

const mainInstance = axios.create({
    baseURL
})

// mainInstance.interceptors.request.use((req) => {
//     const userData = isTokenValid()
//     if (userData) {
//         req.headers.Authorization = `Bearer ${userData.access}`
//     }
//     if (userData === null) {
//         auth.logout()
//         return {
//             ...req,
//             cancelToken: new CancelToken((cancel) => cancel('Cancel repeated request'))
//            }
//     }
//     return req
// })

// clean axios
export const userApi = {
    login(payload: IUserSend): Promise<IUserRecieve> {
        return mainInstance.post<IUserRecieve>("user/login/", payload)
            .then(res => res.data)
    },
    signup(payload: IUserSend): Promise<IUserRecieve> {
        return mainInstance.post<IUserRecieve>("user/register/", payload)
            .then(res => res.data)
    }
}

// rtk query
export const dialogApi = createApi({
    reducerPath: 'dialogApi',
    baseQuery: fetchBaseQuery({baseUrl: baseURL}),
    tagTypes: ['Dialog'],
    endpoints: (build) => ({
        getAllDialogs: build.query<IDialog[], void>({
            query: () => ({
                url: `/dialogs/`,
            }),
            providesTags: result => ['Dialog']
        })
    })
})