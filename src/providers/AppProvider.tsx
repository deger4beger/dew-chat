import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { setupStore } from '../redux/store';

const store = setupStore()

interface IAppProviderProps {
	component: React.ReactNode
}

const AppProvider: React.FC<IAppProviderProps> = ({component}) => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				{component}
			</Provider>
		</BrowserRouter>
	)
}

export default AppProvider