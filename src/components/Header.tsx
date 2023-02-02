import { Menu } from '@headlessui/react'

export default function Header({ children }) {
  return (
    <header className="sticky flex flex-row items-center justify-between px-3 mx-5 transition-colors bg-gray-200 shadow-xl opacity-100 md:mx-20 dark:bg-gray-700 rounded-xl top-5">
      <div className="transition md:hover:scale-125 hover:scale-105">
        <a href="/">
          <img src="/my-favicon.svg" alt="logo" className="object-contain w-12 h-12" />
        </a>
      </div>
      <nav className="hidden py-2 list-none md:flex">{children}</nav>
      <Menu>
        <Menu.Button className="flex flex-row items-center justify-center w-12 h-12 my-1 text-2xl text-gray-900 bg-gray-100 rounded-full md:hidden hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
          <div className="space-y-1">
            <span className="block w-8 h-1 bg-gray-600 dark:bg-gray-300"></span>
            <span className="block w-8 h-1 bg-gray-600 dark:bg-gray-300"></span>
            <span className="block w-8 h-1 bg-gray-600 dark:bg-gray-300"></span>
          </div>
        </Menu.Button>
        <Menu.Items className="absolute right-0 z-10 w-48 p-2 mt-2 text-gray-900 bg-gray-100 rounded-md shadow-lg top-9 dark:bg-gray-700">
          {children}
        </Menu.Items>
      </Menu>
    </header>
  )
}
