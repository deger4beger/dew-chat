import Axios from 'axios';
import { AppDispatch } from '../redux/store';
import { isTokenValid } from '../validators/token';
import { logout } from '../redux/slices/userSlice';
import { mainInstance } from './api';

const interceptor = (dispatch: AppDispatch) => {
    mainInstance.interceptors.request.use((config) => {
        const userData = isTokenValid()
        if (userData) {
            // (config.headers ??= {}).Authorization = `Bearer ${userData.token}` not working
            !config.headers && (config.headers = {})
            config.headers.Authorization = `Bearer ${userData.token}`
        }
        if (userData === null) {
            dispatch(logout())
            throw new Axios.Cancel('Operation canceled due to invalid token')
        }
        return config
    })
}
export default {
    interceptor,
}