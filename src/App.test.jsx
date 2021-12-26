import { render, screen } from "@testing-library/react"
import Header from './components/single/Header/Header';
import Footer from './components/single/Footer/Footer';
import AppRouter from './router/AppRouter';
import App from "./App"
import AppProvider from './providers/AppProvider';
import * as redux from "react-redux";
import { initializeUser } from './redux/slices/userSlice';


jest.mock("./components/single/Header/Header", () => ({
  	Header: jest.fn(() => {
   		return <div data-testid="Header" />
  	})
}))
jest.mock("./components/single/Footer/Footer", () => ({
  	Footer: jest.fn(() => {
   		return <div data-testid="Footer" />
  	})
}))
jest.mock("./router/AppRouter", () => ({
  	AppRouter: jest.fn(() => {
   		return <div data-testid="AppRouter" />
  	})
}))


describe("App", () => {
  	it("Render app component", () => {
    	render(<AppProvider component={<App />} />)
    	const useDispatchSpy = jest.spyOn(redux, 'useDispatch')
        const mockDispatchFn = jest.fn()
        useDispatchSpy.mockReturnValue(mockDispatchFn)

        //action
        initializeUser()

        //assert
        expect(mockDispatchFn).toHaveBeenCalledWith(initializeUser)

    	expect(screen.queryByTestId("Header"))
      		.toBeInTheDocument()
      	expect(screen.queryByTestId("Footer"))
      		.toBeInTheDocument()
      	expect(screen.queryByTestId("AppRouter"))
      		.toBeInTheDocument()

      	//teardown
        useDispatchSpy.mockClear()
  	})
})

