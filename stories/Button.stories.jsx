import React from 'react';
import { Button } from '@chakra-ui/react';
import theme from '../styles/theme';

console.log(theme.components.Button);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		colorScheme: {
			options: Object.keys(theme.colors),
			type: 'select',
			description: 'Themed colors',
		},
		variant: {
			options: Object.keys(theme.components.Button.variants),
			type: 'select',
			description: 'Visual style'
		},
		size: {
			options: Object.keys(theme.components.Button.sizes),
			type: 'select',
			description: 'Size'
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
	variant: 'solid'
};

export const Pagination = Template.bind({});
Pagination.args = {
	label: '1',
	variant: 'pagination',
};