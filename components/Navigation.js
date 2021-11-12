import { Fragment, useEffect, useRef, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon, ChevronDownIcon } from '@heroicons/react/outline';
import Link from 'next/link';

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
  // {
  //   href: "/",
  //   label: "Sign up"
  // }
];

const Submenu = props => {
  const { item } = props;
  return (
    <div className="inline">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline menu-link">
            {item.label}
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 inline-block text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="sub-menu">
            <div className="px-1 py-1 ">
              {item.children.map((subItem, subItemIndex) => {
                return (
                  <Menu.Item key={'sub-item-' + subItemIndex}>
                    {({ active }) => (
                      <Link href={subItem.href} passHref>
                        <a
                          href="replace"
                          aria-label={subItem.label}
                          className="sub-menu-link">
                          {subItem.label}
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

const NavLinks = () => {
  return navStructure.map((item, itemIndex) => (
    <li key={'menu-item-' + itemIndex}>
      {item.children ? (
        <Submenu item={item} />
      ) : (
        <Link href={item.href} passHref>
          <a href="replace" aria-label={item.label} className="menu-link">
            {item.label}
          </a>
        </Link>
      )}
    </li>
  ));
};

const Logo = () => {
  return (
    <Link href="/" passHref>
      <a
        href="replace"
        aria-label="Company"
        title="Company"
        className="inline-flex items-center">
        <svg
          className="w-8 text-deep-purple-accent-400"
          viewBox="0 0 24 24"
          strokeLinejoin="round"
          strokeWidth="2"
          strokeLinecap="round"
          strokeMiterlimit="10"
          stroke="currentColor"
          fill="none">
          <rect x="3" y="1" width="7" height="12" />
          <rect x="3" y="17" width="7" height="6" />
          <rect x="14" y="1" width="7" height="6" />
          <rect x="14" y="11" width="7" height="12" />
        </svg>
        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
          Company
        </span>
      </a>
    </Link>
  );
};

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="navigation-container">
      <div className="relative flex items-center justify-between">
        <Logo />
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <NavLinks />
          <li>
            <Link href="/" passHref>
              <a
                href="replace"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up">
                Sign up
              </a>
            </Link>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="menu-open"
            onClick={() => setIsMenuOpen(true)}>
            <MenuIcon className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Logo />
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}>
                      <XIcon className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <NavLinks />
                    <li>
                      <Link href="/" passHref>
                        <a
                          href="replace"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up">
                          Sign up
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
