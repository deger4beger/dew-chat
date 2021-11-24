import React, { useLayoutEffect, useState } from "react"
import { ThemeType, themes } from '../shared/themes';

interface IThemeContext {
	theme: ThemeType
	setTheme: (theme: ThemeType) => void
}

export const ThemeContext = React.createContext<IThemeContext>({theme: "dark", setTheme: () => void 0})

interface IThemeProviderProps {
	children: React.ReactNode
}

const ThemeProvider: React.FC<IThemeProviderProps> = ({children}) => {

	const storageTheme = localStorage.getItem("theme")
	const [theme, setTheme] = useState<ThemeType>(storageTheme === "light" ? "light" : "dark")

	const changeTheme = (theme: ThemeType) => {
		for (let [key, value] of Object.entries(themes[theme])) {
			document.documentElement.style.setProperty(`--${key}`, value)
		}
		setTheme(theme)
	}

	useLayoutEffect(() => {
		changeTheme(theme)
	}, [theme])

	return (
		<ThemeContext.Provider value={{theme, setTheme: changeTheme}}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider