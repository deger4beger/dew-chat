import axios from "axios"
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import { IUserRecieve, IUserSend } from '../types/User';
import { IDialog } from '../types/Dialog';

const baseURL = "https://dew-chat.herokuapp.com"

const mainInstance = axios.create({
	baseURL
})

// clean axios for redux thunks
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

// redux toolkit query
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