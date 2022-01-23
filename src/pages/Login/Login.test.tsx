import React from "react"
import { render, screen } from "@testing-library/react"
import * as CustomReduxHooks from "../../hooks/redux"
import Login from "./Login"
import AppProvider from '../../providers/AppProvider';
import AuthTemplate from '../../components/templates/AuthTemplate/AuthTemplate';
import Button from '../../components/shared/Button/Button';
import Input from '../../components/shared/Input/Input';
import { resetError } from '../../redux/slices/userSlice';

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

	const useSelectorMock = jest.spyOn(CustomReduxHooks, "useAppSelector"),
		useDispatchMock = jest.spyOn(CustomReduxHooks, "useAppDispatch")
	const fakeDispatch = jest.fn()

	useSelectorMock.mockReturnValue(true)
	useDispatchMock.mockReturnValue(fakeDispatch)

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

	it("Correct props are passed to AuthTemplate and Button from useSelector", () => {

		useSelectorMock
			.mockReturnValueOnce(true)
			.mockReturnValueOnce(false)

		render(<AppProvider component={<Login />} />)

		expect(useSelectorMock).toHaveBeenCalledTimes(2)

		expect(AuthTemplate).toHaveBeenCalledWith(
			expect.objectContaining({
				error: false
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

	it("resetError shuld be dispatched when component unmount", () => {

		const { unmount } = render(<AppProvider component={<Login />} />)

		unmount()

		expect(fakeDispatch).toHaveBeenCalledTimes(1)
		expect(fakeDispatch).toHaveBeenCalledWith(resetError())

	})

})