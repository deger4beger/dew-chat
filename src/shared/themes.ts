export const themes = {
	light: {
		bg1: "#DEDEDE",
	    bg2: "#D0CFCF",
	    color1: "#1B1B1B",
	    color2: "#4C4C4C",
	    additional: "#A1A1A1",
	    main: "#009485"
	},
	dark: {
		bg1: "#282828",
	    bg2: "#1E1E1E",
	    color1: "#FFFFFF",
	    color2: "#CFCFCF",
	    additional: "#888888",
	    main: "#009485"
	}
}

export type ThemeType = keyof typeof themes