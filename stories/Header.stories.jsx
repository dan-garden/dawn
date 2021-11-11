import Header from '../components/Header';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: Header,
  title: 'Components/Header',
  parameters: {
    layout: 'padding',
  },
};

export const Default = () => <Header />;
