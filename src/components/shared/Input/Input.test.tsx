import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import Input from './Input';
import userEvent from '@testing-library/user-event';

describe("Button component", () => {

	it("input rendered and has passed attributes", () => {

		render(
			<Input
				name={"input"}
				placeholder={"input"}
				type={"text"}
				value={"hello"}
				onChange={jest.fn()}
			/>
		)

		const input = screen.queryByRole("textbox")

		expect(input).toBeInTheDocument()

		expect(input).toHaveAttribute("name", "input")
		expect(input).toHaveAttribute("placeholder", "input")
		expect(input).toHaveAttribute("type", "text")

	})

	it("onChange triggers with typed value" ,() => {

		const onChange = jest.fn((e: React.ChangeEvent<HTMLInputElement>) => e.currentTarget.value)

		render(
			<Input
				name={"input"}
				placeholder={"input"}
				type={"text"}
				value={"hell"}
				onChange={onChange}
			/>
		)

		const input: any = screen.getByRole("textbox")

		expect(input.value).toBe("hell")

		userEvent.type(input, "o")

		expect(onChange).toHaveBeenCalledTimes(1)
		expect(onChange).toHaveReturnedWith("hello")

		userEvent.type(input, "braza")
		expect(onChange).toHaveBeenCalledTimes(6)

		// fireEvent.change(input, {target: {value: "brother"}})
		// expect(onChange).toBeCalledWith("brother")

	})

})