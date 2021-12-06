import React, { useLayoutEffect, useState } from "react"
import { ThemeType, themes } from '../shared/themes';

interface IThemeContext {
	theme: ThemeType
	setTheme: (theme: ThemeType) => void
	toggleTheme: () => void
}

interface IThemeProviderProps {
	children: React.ReactNode
}

export const ThemeContext = React.createContext<IThemeContext>({
	theme: "dark",
	setTheme: () => void 0,
	toggleTheme: () => void 0
})

const ThemeProvider: React.FC<IThemeProviderProps> = ({children}) => {

	const storageTheme = localStorage.getItem("theme")
	const [theme, setTheme] = useState<ThemeType>(storageTheme === "dark" ? "dark" : "light")

	const changeTheme = (theme: ThemeType) => {
		for (let [key, value] of Object.entries(themes[theme])) {
			document.documentElement.style.setProperty(`--${key}`, value)
		}
		localStorage.setItem("theme", theme)
		setTheme(theme)
	}

	const toggleTheme = () => {
		changeTheme(theme === "dark" ? "light" : "dark")
	}

	useLayoutEffect(() => {
		changeTheme(theme)
	}, [theme])

	return (
		<ThemeContext.Provider value={{theme, setTheme: changeTheme, toggleTheme}}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider