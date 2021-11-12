import Header from '../components/Header';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: Header,
  title: 'Components/Header',
  parameters: {
    layout: 'none',
  },
  args: {
    structure: [
      {
        href: '/',
        label: 'Menu Item 1',
      },
      {
        href: '/',
        label: 'Menu Item 2',
      },
      {
        href: '/',
        label: 'Menu Item 3',
        children: [
          {
            href: '/',
            label: 'Child Item 1',
          },
          {
            href: '/',
            label: 'Child Item 2',
          },
          {
            href: '/',
            label: 'Child Item 3',
          },
          {
            href: '/',
            label: 'Child Item 4',
          },
        ],
      },
      {
        href: '/',
        label: 'Menu Item 4',
      },
    ],
  },
  argTypes: {
    structure: {
      control: 'object',
      table: {
        expanded: true,
      },
    },
  },
};

export const Default = props => {
  console.log(props);
  return <Header {...props} />;
};
