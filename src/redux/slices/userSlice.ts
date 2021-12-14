import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUserRecieve } from '../../types/User';
import { authThunk } from './userThunks';
import { isTokenValid } from '../../validators/token';

type IInitalUserData = {
    _id: null | string
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
        _id: null,
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
            const userData = isTokenValid()
            if (userData) {
                state.isAuth = true
                state.userData = userData
            }
        },
        resetError(state) {
            state.error = null
        },
        logout(state) {
            state.userData = {
                _id: null,
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