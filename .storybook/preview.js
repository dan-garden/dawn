import { ChakraProvider } from "@chakra-ui/react";
import theme from '@chakra-ui/theme'
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
	}
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