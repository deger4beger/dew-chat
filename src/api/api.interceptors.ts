import Axios from 'axios';
import { AppDispatch } from '../redux/store';
import { isTokenValid } from '../validators/token';
import { logout } from '../redux/slices/userSlice';

const interceptor = (dispatch: AppDispatch) => {
    Axios.interceptors.request.use((config) => {
        const userData = isTokenValid()
        if (userData) {
           (config.headers ??= {}).Authorization = `Bearer ${userData.token}`
        }
        if (userData === null) {
            dispatch(logout())
            throw new Axios.Cancel('Operation canceled due to invalid token')
        }
        return config
    })
    // Axios.interceptors.response.use(
    //     (next) => {
    //         return Promise.resolve(next);
    //     },
    //     (error) => {
    //         // handle error here
    //         // some dispatch
    //         return Promise.reject(error);
    //     }
    // )
}
export default {
    interceptor,
}