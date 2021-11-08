import React from 'react';
import { Button } from '@chakra-ui/react';
import theme from '../styles/theme';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'Components/Button',
	component: Button,
	description: "A button, a button!",
	argTypes: {
		colorScheme: {
			options: Object.keys(theme.colors),
			type: 'select',
			description: 'Chakra Themed Colors',
		},
		label: {
			type: 'string',
			description: 'Text Content',
		}
	},
};

const Template = ({ label, ...props }) => {
	return (<Button {...props}>{label}</Button>)
};

export const Primary = Template.bind({});
Primary.args = {
	label: 'Button',
	colorScheme: 'red',
};