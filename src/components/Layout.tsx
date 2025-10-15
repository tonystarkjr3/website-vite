import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/24/outline';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

  // initialize theme on client only — default to dark when no saved value
  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initial: 'light' | 'dark' = saved === 'light' || saved === 'dark' ? saved : 'dark';
    setTheme(initial);

    const root = document.documentElement;
    if (initial === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, []);

  // apply & persist when user toggles
  useEffect(() => {
    if (!theme) return;
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-gray-700 shadow">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-6">
              {/* Home icon (left), hidden on mobile */}
              <NavLink
                to="/"
                aria-label="Home"
                className="hidden sm:flex items-center text-gray-700 dark:text-gray-200 hover:text-indigo-600"
              >
                <HomeIcon className="w-6 h-6" />
              </NavLink>

              {/* Desktop nav (hidden on very small screens) */}
              <div className="hidden sm:flex items-center space-x-4">
                {navItems.slice(1).map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      [
                        'px-2 py-1 text-sm transition-colors',
                        isActive
                          ? 'text-indigo-600 underline decoration-indigo-600 decoration-2 underline-offset-4'
                          : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600'
                      ].join(' ')
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Mobile nav (visible on small screens) */}
              <div className="sm:hidden flex items-center space-x-3">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      [
                        'px-2 py-1 text-sm',
                        isActive
                          ? 'text-indigo-600 underline decoration-indigo-600 decoration-2 underline-offset-4'
                          : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600'
                      ].join(' ')
                    }
                    aria-label={item.label}
                  >
                    {item.label === 'Home' ? <HomeIcon className="w-5 h-5 inline" /> : item.label}
                  </NavLink>
                ))}
              </div>

              {/* Theme toggle (right side) */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-md bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                {theme === 'dark' ? (
                  <SunIcon className="w-5 h-5 text-yellow-400" />
                ) : (
                  <MoonIcon className="w-5 h-5 text-gray-700" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Central page container — change max-w-6xl to max-w-4xl if you want tighter content */}
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 text-center p-4">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-center space-x-6">
          <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-300">
            <a
              href="https://www.linkedin.com/in/anupam-pokharel-onebuddingnerd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-indigo-600 transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/tonystarkjr3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-indigo-600 transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </a>

            <Link to="/contact" aria-label="Contact" className="hover:text-indigo-600 transition-colors">
              <HiOutlineMail className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
