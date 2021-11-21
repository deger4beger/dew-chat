import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"

const rootReducer = combineReducers({
    userReducer,
    // [postAPI.reducerPath]: postAPI.reducer
})

export const setupStore = () => {
    return configureStore(
    {
        reducer: rootReducer,
        devTools: true,
    //     middleware: (getDefaultMiddleware) =>
    //         getDefaultMiddleware()
    //             .concat(postAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']