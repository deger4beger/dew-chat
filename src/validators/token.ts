import decode, { JwtPayload } from "jwt-decode"
import { IUserRecieve } from '../types/User';

export const isTokenValid = () => {
	const user = localStorage.getItem("user")
	if (!user) {
		return false
	}
	const userData: IUserRecieve = JSON.parse(user)
    const decodedToken = decode<JwtPayload>(userData.token)
	if (decodedToken.exp && (decodedToken.exp * 1000 > new Date().getTime())) {
		return userData
	}
	return false
}