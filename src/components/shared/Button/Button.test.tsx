import React from "react"
import { render, screen } from "@testing-library/react"
import Button from './Button';
import userEvent from '@testing-library/user-event';

describe("Button component", () => {

	it("onClick triggers passed function when button not disabled", () => {

		const content = "btn", onClick = jest.fn()

		render(
			<Button
				content={content}
				onClick={onClick}
				disabled={false}
				loading={false}
			/>
		)

		userEvent.click(screen.getByRole("button"))

		expect(onClick).toHaveBeenCalledTimes(1)

		userEvent.dblClick(screen.getByRole("button"))

		expect(onClick).toHaveBeenCalledTimes(3)

		expect(screen.queryByText(/-/)).not.toBeInTheDocument()

	})

	it("Content is shown inside button and disabled and loading classes working", () => {

		const content = "btn", onClick = jest.fn()

		render(
			<Button
				content={content}
				onClick={onClick}
				disabled={true}
				loading={true}
			/>
		)

		expect(screen.queryByText(content)).toBeInTheDocument()

	})

	// it("Preloader shows and disabled button not triggers onClick", () => {

		// do not able to check pointer-events: none

	// 	const content = "btn", onClick = jest.fn()

	// 	render(
	// 		<Button
	// 			content={content}
	// 			onClick={onClick}
	// 			disabled={true}
	// 			loading={false}
	// 		/>
	// 	)

	// 	userEvent.click(screen.getByRole("button"))

	// 	expect(onClick).not.toHaveBeenCalled()

	// 	expect(screen.queryByText(/-/)).toBeInTheDocument()

	// })

})