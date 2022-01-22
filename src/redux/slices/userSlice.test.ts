import reducer, { initialState, initializeUser, resetError, logout } from './userSlice'
import * as TokenValidation from '../../validators/token';

describe("UserSlice", () => {

    beforeEach(() => {
        jest.clearAllMocks()
    })

    const isTokenValidMock = jest.spyOn(TokenValidation, "isTokenValid")

    test('should return the initial state', () => {

        expect(reducer(undefined, {})).toEqual(initialState)

    })

    test('should initialize user if userData exists', () => {

        const userData = {
            _id: "123",
            username: "username",
            token: "token"
        }

        isTokenValidMock.mockReturnValue(userData)

        expect(reducer(initialState, initializeUser())).toEqual(
            {
                userData,
                isAuth: true,
                isLoading: false,
                error: null
            }
        )

        expect(isTokenValidMock).toHaveBeenCalledTimes(1)

    })

    test('should not initialize user if userData not exists', () => {

        const userData = false

        isTokenValidMock.mockReturnValue(userData)

        expect(reducer(initialState, initializeUser())).toEqual(initialState)

        expect(isTokenValidMock).toHaveBeenCalledTimes(1)

    })

    test('should not initialize user if userData not exists', () => {

        const userData = false

        isTokenValidMock.mockReturnValue(userData)

        expect(reducer(initialState, initializeUser())).toEqual(initialState)

    })

    test('should reset error', () => {

        expect(reducer({
            ...initialState,
            error: "some error"
        }, resetError())).toEqual(initialState)

    })

    test('should logout with return of initial state and clear localStorage', () => {

        const mockedLocalStorage = jest.spyOn(window.localStorage.__proto__, 'removeItem')

        expect(reducer({
            userData: {
                _id: "some",
                username: "some",
                token: "some"
            },
            isAuth: true,
            isLoading: false,
            error: null
        }, logout())).toEqual(initialState)

        expect(mockedLocalStorage).toHaveBeenCalledWith("user")

    })

})