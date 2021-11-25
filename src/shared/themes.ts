export const themes = {
	light: {
		bg1: "#DEDEDE",
	    bg2: "#D0CFCF",
	    color1: "#1B1B1B",
	    color2: "#4C4C4C",
	    additional: "#A1A1A1",
	    main: "#DC3939"
	},
	dark: {
		bg1: "#16151b",
	    bg2: "#1c1b23",
	    color1: "#DEDEDE",
	    color2: "#BFBFBF",
	    additional: "#8D8D8D",
	    main: "#DC3939"
	}
}

export type ThemeType = keyof typeof themes