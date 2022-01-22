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

		const onChange = jest.fn()

		render(
			<Input
				name={"input"}
				placeholder={"input"}
				type={"text"}
				value={"hello"}
				onChange={onChange}
			/>
		)

		const input: any = screen.getByRole("textbox")

		expect(input.value).toBe("hello")

		userEvent.type(input, "b")

		expect(onChange).toBeCalledTimes(1)

		fireEvent.change(input, {target: {value: "brother"}})

		expect(onChange).toBeCalledWith("brother")

	})

})