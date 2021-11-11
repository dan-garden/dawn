import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const navStructure = [
  {
    href: '/',
    label: 'Link 1',
  },
  {
    href: '/',
    label: 'Link 2',
  },
  {
    href: '/',
    label: 'Link 3',
  },
  {
    href: '/',
    label: 'Link 4',
  },
  // {
  //   href: "/",
  //   label: "Sign up"
  // }
];

const NavLinks = () => {
  return navStructure.map((item, itemIndex) => (
    <li key={'nav' + itemIndex}>
      <Link href={item.href} passHref>
        <a
          href="replace"
          aria-label={item.label}
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
          {item.label}
        </a>
      </Link>
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
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
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
