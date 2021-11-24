import React, { useState } from "react"

interface IThemeProviderProps {
	children: React.ReactNode
}

const ThemeProvider: React.FC<IThemeProviderProps> = ({children}) => {

	const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark")

	const themes = {
		light: {
			bg1: "#DEDEDE",
		    bg2: "#D0CFCF",
		    color1: "#1B1B1B",
		    color2: "#4C4C4C",
		    additional: "#A1A1A1",
		    main: "#009485"
		},
		dark: {
			bg1: "black",
		    bg2: "#D0CFCF",
		    color1: "white",
		    color2: "#4C4C4C",
		    additional: "#A1A1A1",
		    main: "#009485"
		}
	}

	const ThemeContext = React.createContext([theme, setTheme])

	return (
		<ThemeContext.Provider value={[theme, setTheme]}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider