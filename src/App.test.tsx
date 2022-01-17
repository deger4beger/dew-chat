import React from "react"
import { render, screen } from "@testing-library/react"
import Header from './components/single/Header/Header';
import Footer from './components/single/Footer/Footer';
import AppRouter from './router/AppRouter';
import App from "./App"
import AppProvider from './providers/AppProvider';



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


describe("App", () => {
  	it("Render app component", () => {

    	render(<AppProvider component={<App />} />)

        screen.debug()

    	expect(screen.queryByTestId("Header"))
      		.toBeInTheDocument()
      	expect(screen.queryByTestId("Footer"))
      		.toBeInTheDocument()
      	expect(screen.queryByTestId("AppRouter"))
      		.toBeInTheDocument()

  	})
})

