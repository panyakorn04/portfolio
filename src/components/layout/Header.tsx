import * as React from 'react';
import { useTranslation } from "next-i18next";

import UnstyledLink from '@/components/links/UnstyledLink';
import SelectLanguage from '@/components/selectLanguage';

const links = [
  { href: '/', label: 'About' },
  { href: '/', label: 'Contact' },
];

export default function Header() {
  const { t } = useTranslation();

  const [isMode, setIsMode] = React.useState(false);
  const [isMenu, setIsMenu] = React.useState(false);


  return (
    <header className='sticky top-2 z-30 '>
      <div className='layout flex h-14 items-center justify-between px-4 text-dark dark:text-white bg-white bg-opacity-20 backdrop-blur-lg rounded-lg drop-shadow-lg'>
        <UnstyledLink href='/' className='font-bold hover:text-blue-500 transition-colors duration-300'>
          {t("header-home")}
        </UnstyledLink>
        <nav className='hidden md:inline-flex'>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-blue-500 transition-colors duration-300'>
                  {t(`header-${label.toLowerCase()}`)}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex space-x-2 items-center justify-center'>
          <SelectLanguage />
          <button onClick={() => setIsMode(!isMode)} className=' bg-gray-200 dark:bg-blue-500 p-2 rounded-lg hover:bg-blue-200 transition-colors duration-300'>
            {isMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fill-rule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clip-rule="evenodd" />
              </svg>

            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 transition ease-in-out duration-300 transform">
                  <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
                </svg>
              </>
            )}
          </button>
          <button onClick={() => setIsMenu(!isMenu)} className="block md:hidden p-2 rounded-lg border-gray-300  transition-colors duration-300">
            {isMenu ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
