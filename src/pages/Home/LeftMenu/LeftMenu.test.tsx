import React from "react"
import { render, screen } from "@testing-library/react"
import AppProvider from "providers/AppProvider"
import MenuItem from './MenuItem/MenuItem';
import LeftMenu from './LeftMenu';

jest.mock("./MenuItem/MenuItem", () => ({
    __esModule: true,
    default: jest.fn(() => (
        <div data-testid="MenuItem"></div>
    ))
}))

describe("Login component", () => {

	const data = [
		{
			_id: "1",
			name: "first"
		},
		{
			_id: "2",
			name: "second"
		}
	],
	selectedUser = "2",
	setSelectedUser = () => void 0

	it("MenuItem rendered N times based on data prop", () => {

		render(<AppProvider component={<LeftMenu
			data={data}
			selectedUser={selectedUser}
			setSelectedUser={setSelectedUser}
		 />} />)

		expect(screen.queryAllByTestId("MenuItem")).toHaveLength(2)

	})

	it("Right props passed to MenuItem", () => {

		render(<AppProvider component={<LeftMenu
			data={data}
			selectedUser={selectedUser}
			setSelectedUser={setSelectedUser}
		 />} />)

		const menuItemProps = (MenuItem as jest.Mock).mock.calls.map(
    		args => ({
    			name: args[0].name,
    			isSelected: args[0].isSelected
    		})
    	)

    	expect(menuItemProps).toEqual([
    		{
    			name: "first",
    			isSelected: false
    		},
    		{
    			name: "second",
    			isSelected: true
    		}
    	])

	})

	it("Preloader is working", () => {

		const { unmount } = render(<AppProvider component={<LeftMenu
			data={data}
			selectedUser={selectedUser}
			setSelectedUser={setSelectedUser}
		 />} />)

		expect(screen.queryByText(/Loading.../)).not.toBeInTheDocument()

		unmount()

		render(<AppProvider component={<LeftMenu
			data={data}
			selectedUser={selectedUser}
			setSelectedUser={setSelectedUser}
			isLoading={true}
		 />} />)

		expect(screen.queryByText(/Loading.../)).toBeInTheDocument()

	})

	it("Error is working", () => {

		const { unmount } = render(<AppProvider component={<LeftMenu
			data={data}
			selectedUser={selectedUser}
			setSelectedUser={setSelectedUser}
		 />} />)

		expect(screen.queryByText(/error/)).not.toBeInTheDocument()

		unmount()

		render(<AppProvider component={<LeftMenu
			data={data}
			selectedUser={selectedUser}
			setSelectedUser={setSelectedUser}
			error={true}
		 />} />)

		expect(screen.queryByText(/error/)).toBeInTheDocument()

	})


})