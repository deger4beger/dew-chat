import React from "react"
import { render, screen } from "@testing-library/react"
import * as CustomReduxHooks from "./hooks/redux"
import Header from './components/single/Header/Header';
import Footer from './components/single/Footer/Footer';
import AppRouter from './router/AppRouter';
import App from "./App"
import AppProvider from './providers/AppProvider';
import { initializeUser } from './redux/slices/userSlice';

jest.mock("./components/single/Header/Header", () => ({
    __esModule: true,
    default: jest.fn(() => (
        <div data-testid="Header" />
    ))
}))
jest.mock("./components/single/Footer/Footer", () => ({
    __esModule: true,
    default: jest.fn(() => (
        <div data-testid="Footer" />
    ))
}))
jest.mock("./router/AppRouter", () => ({
    __esModule: true,
    default: jest.fn(() => (
        <div data-testid="AppRouter" />
    ))
}))


describe("App component", () => {

    beforeEach(() => {
        jest.clearAllMocks()
    })

    const useDispatchMock = jest.spyOn(CustomReduxHooks, 'useAppDispatch')
    const fakeDispatch = jest.fn()

    useDispatchMock.mockReturnValue(fakeDispatch)

    it("Render component", () => {

        render(<AppProvider component={<App />} />)

        expect(screen.queryByTestId("Header"))
            .toBeInTheDocument()
        expect(screen.queryByTestId("Footer"))
            .toBeInTheDocument()
        expect(screen.queryByTestId("AppRouter"))
            .toBeInTheDocument()

    })

    it("Dispatch should have been called with action 1 time only", () => {

        render(<AppProvider component={<App />} />)

        expect(fakeDispatch).toHaveBeenCalledWith(initializeUser())
        expect(fakeDispatch).toHaveBeenCalledTimes(1)

    })

})

