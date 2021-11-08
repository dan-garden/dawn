import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

//Theme colors
const colors = {
	// ---example:----
	// brand: {
	// 	100: "#F0F4F8",
	// 	200: "#D9E2EC",
	// 	300: "#BCCCDC",
	// 	400: "#9FB3C8",
	// 	500: "#829AB1",
	// 	600: "#627D98",
	// 	700: "#486581",
	// 	800: "#334E68",
	// 	900: "#243B53"
	// }
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
	breakpoints
});