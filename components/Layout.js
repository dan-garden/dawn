import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';

const navStructure = [
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
];

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Header structure={navStructure} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
