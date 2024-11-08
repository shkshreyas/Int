import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/#features' },
  { name: 'Health History', href: '/health-history' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <Disclosure as="nav" className="bg-white dark:bg-gray-800 shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <span className="text-2xl font-bold text-primary-600 dark:text-primary-400 cursor-pointer">
                      IntelliCare
                    </span>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
                <ThemeToggle />
                <Link href="/learn-more">
                  <span className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 px-4 py-2 text-sm font-medium cursor-pointer">
                    Learn More
                  </span>
                </Link>
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 px-4 py-2 text-sm font-medium"
                >
                  Login
                </button>
                <Link href="/get-started">
                  <span className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium cursor-pointer hover:bg-primary-700">
                    Sign Up
                  </span>
                </Link>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="pl-3 pr-4 py-2">
                <ThemeToggle />
              </div>
            </div>
          </Disclosure.Panel>

          {/* Login Modal */}
          {isLoginOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-md w-full">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Login</h2>
                  <button
                    onClick={() => setIsLoginOpen(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Password
                    </label>
                    <input
                      type="password"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </Disclosure>
  );
}