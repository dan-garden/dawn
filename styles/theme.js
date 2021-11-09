import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

// Default component styles
import components from "./components.js";

//Theme colors
const colors = {
	aquagreen: {
		500: "#165D52"
	}
	
};

//Breakpoints
const breakpoints = createBreakpoints({
	"sm": "30em",
	"md": "48em",
	"lg": "62em",
	"xl": "80em",
	"2xl": "96em",
});

export default extendTheme({
	colors,
	breakpoints,
	components
});