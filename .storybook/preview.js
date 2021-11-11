import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../styles/globals.css';

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
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
};

export const decorators = [
  Story => {
    return <Story />;
  },
];
