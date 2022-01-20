import React from "react"
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory, History } from 'history';
import userEvent from "@testing-library/user-event";
import PublicMenu from './PublicMenu';

describe("PiblicMenu component", () => {

	it('Routes /login & /register working', async () => {

		const history = createMemoryHistory()

		history.push = jest.fn()

		render(
		    <Router history={history as any}>
		      	<PublicMenu />
		    </Router>
		)

		userEvent.click(screen.getByText(/Login/))

		expect(history.push).toHaveBeenCalledWith("/login")

		userEvent.click(screen.getByText(/Sign up/))

		expect(history.push).toHaveBeenCalledWith("/signup")

	})
})