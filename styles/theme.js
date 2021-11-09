import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

// Default component styles
import components from "./components.js";

//Theme colors
const colors = {
	// white: "#FFFFFF",
	// black: "#0c050c",
	// gray: {
	// 	500: "#9e9999"
	// },
	// beige: {
	// 	500: "#fff8f0"
	// },
	// crystalwatersteal: {
	// 	500: "#b7dedd"
	// },
	// dirtroadbeige: {
	// 	500: "#e6d5c4"
	// },
	// aquagreen: {
	// 	500: "#64b19d", //Primary
	// },
	// parrotgreen: {
	// 	500: "#165d52",
	// 	600: "black", //Hover
	// 	700: "black", //Active
	// },
	// brightskyblue: {
	// 	500: "#3b5ba9"
	// },
	// saltflatpink: {
	// 	500: "#ffd8de"
	// },
	// shirazred: {
	// 	500: "#8b2f41"
	// },
	// pawpawred: {
	// 	500: "#fd424f"
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

//Global Config
const config = {
	cssVarPrefix: "chakra",
	initialColorMode: "light",
	useSystemColorMode: false,
}

export default extendTheme({
	config,
	colors,
	breakpoints,
	components,
});