import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import decode, {JwtPayload} from "jwt-decode"
import { IUserRecieve } from '../../types/User';
import { authThunk } from './userThunks';

interface IInitalUserData {
    id: null | string
    created: null | string
    username: null | string
    token: null | string
}

interface IUserState {
	userData: IInitalUserData
	isAuth: boolean
	isLoading: boolean
	error: string | null
}

const initialState: IUserState = {
	userData: {
        id: null,
        created: null,
        username: null,
        token: null
    },
	isAuth: false,
	isLoading: false,
	error: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    	initializeUser(state) {
    		const user = localStorage.getItem("user")
    		if (user) {
    			const userData: IUserRecieve = JSON.parse(user)
    			const decodedToken = decode<JwtPayload>(userData.token)
    			if (decodedToken.exp && (decodedToken.exp * 1000 > new Date().getTime())) {
    				state.isAuth = true
    				state.userData = userData
    			}
    		}
    	},
        resetError(state) {
            state.error = null
        },
        logout(state) {
            state.userData = {
                id: null,
                created: null,
                username: null,
                token: null
            }
            state.isAuth = false
            localStorage.removeItem("user")
        }
    },
    extraReducers: {
    	[authThunk.pending.type]: (state) => {
            state.isLoading = true;
        },
        [authThunk.fulfilled.type]: (state, action: PayloadAction<IUserRecieve>) => {
            state.isLoading = false;
            state.error = ""
            state.isAuth = true
            state.userData = action.payload
        },
        [authThunk.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export const { initializeUser, resetError, logout } = userSlice.actions

export default userSlice.reducer