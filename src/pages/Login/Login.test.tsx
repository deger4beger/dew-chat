import React from "react"
import { render, screen } from "@testing-library/react"
import * as CustomReduxHooks from "../../hooks/redux"
import Login from "./Login"
import AppProvider from '../../providers/AppProvider';
import AuthTemplate from '../../components/templates/AuthTemplate/AuthTemplate';
import Button from '../../components/shared/Button/Button';
import Input from '../../components/shared/Input/Input';

jest.mock("../../components/templates/AuthTemplate/AuthTemplate", () => ({
    __esModule: true,
    default: jest.fn(({ children, button }) => (
        <div data-testid="AuthTemplate">{button}{children}</div>
    ))
}))
jest.mock("../../components/shared/Button/Button", () => ({
    __esModule: true,
    default: jest.fn(() => (
        <div data-testid="Button" />
    ))
}))
jest.mock("../../components/shared/Input/Input", () => ({
    __esModule: true,
    default: jest.fn(() => (
        <div data-testid="Input" />
    ))
}))

describe("Login component", () => {

	beforeEach(() => {
		useSelectorMock.mockClear()
	})

	const useSelectorMock = jest.spyOn(CustomReduxHooks, "useAppSelector")
	// useSelectorMock.mockReturnValueOnce(true).mockReturnValueOnce(false) // why not working ?
	useSelectorMock.mockReturnValue(true)

	it("All components are in the document", () => {

		render(<AppProvider component={<Login />} />)

		expect(screen.queryByTestId("AuthTemplate")).toBeInTheDocument()
		expect(screen.queryByTestId("Button")).toBeInTheDocument()
		expect(screen.queryAllByTestId("Input")).toHaveLength(2)

	})

	it("2 inputs passed as children to AuthTemplate component", () => {

		render(<AppProvider component={<Login />} />)

		screen.queryAllByTestId("Input").map(el => {
			expect(screen.queryByTestId("AuthTemplate")).toContainElement(el)
		})

	})

	it("Correct props are passed to AuthTemplate and Button", () => {

		render(<AppProvider component={<Login />} />)

		expect(AuthTemplate).toHaveBeenCalledWith(
			expect.objectContaining({
				error: true
			}),
			expect.anything()
		)

		expect(Button).toHaveBeenCalledWith(
			expect.objectContaining({
				disabled: true,
				loading: true
			}),
			expect.anything()
		)

	})

})