import axios from "axios"
import { IUserRecieve, IUserSend } from '../types/User';

const mainInstance = axios.create({
	baseURL: "" // url need
})

export const userApi = {
	login(payload: IUserSend): Promise<IUserRecieve> {
		return mainInstance.post<IUserRecieve>("user/login", payload)
			.then(res => res.data)
	},
	signup(payload: IUserSend): Promise<IUserRecieve> {
		return mainInstance.post<IUserRecieve>("user/register", payload)
			.then(res => res.data)
	}
}