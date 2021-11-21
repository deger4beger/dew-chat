import { createAsyncThunk } from "@reduxjs/toolkit"
import { IUserSend } from '../../types/User';
import { userApi } from '../../api/api';

interface ILoginThunkPayload extends IUserSend {
    type: "login" | "signup"
}

export const authThunk = createAsyncThunk(
    'user/login',
    async (payload: ILoginThunkPayload, thunkAPI) => {
        try {
            const { type, ...rest } = payload
            const userData = await userApi[type](rest)
            localStorage.setItem("user", JSON.stringify(userData))
            return userData
        } catch (e) {
            return thunkAPI.rejectWithValue("Auth failed")
        }
    }
)

// may be different logic in the future
// export const signupThunk = createAsyncThunk(
//     'user/signup',
//     async (payload: IUserSend, thunkAPI) => {
//         try {
//             const userData = await userApi.signup(payload)
//             localStorage.setItem("user", JSON.stringify(userData))
//             return userData
//         } catch (e) {
//             return thunkAPI.rejectWithValue("Registration failed")
//         }
//     }
// )