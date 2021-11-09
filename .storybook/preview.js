import { ChakraProvider } from "@chakra-ui/react";
import theme from '../styles/theme'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
export const parameters = {
	actions: {
		argTypesRegex: "^on[A-Z].*"
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	viewport: {
		viewports: INITIAL_VIEWPORTS,
	},
	layout: 'centered',
}

export const decorators = [
	Story => {
		return (
			<ChakraProvider theme={theme}>
				<Story />
		 	</ChakraProvider>
		);
	}
];