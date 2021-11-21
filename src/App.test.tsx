import { render, screen } from "@testing-library/react"
import App from './App'
import AppProvider from './providers/AppProvider'

test("Render App component", () => {

	render(<AppProvider component={<App />} />)

	expect(screen.getByTestId("main")).toBeInTheDocument()
})