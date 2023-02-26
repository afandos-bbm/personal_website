/* eslint-disable no-unused-vars */
import { Menu, Transition } from '@headlessui/react'
import React from 'react'

export default function Header({ children }) {
  return (
    <header className='sticky flex flex-row items-center justify-between px-3 mx-5 transition-colors bg-gray-200 shadow-xl opacity-100 md:mx-20 dark:bg-gray-700 rounded-xl top-5 z-10'>
      <div className='transition md:hover:scale-125 hover:scale-105'>
        <a href='/'>
          <img src='/my-favicon.svg' alt='logo' className='object-contain w-12 h-12' />
        </a>
      </div>
      <nav className='hidden py-2 gap-5 list-none md:flex'>{children}</nav>
      <div className='relative md:hidden'>
        <Menu>
          {({ open }) => (
            <React.Fragment>
              <Menu.Button
                className='flex flex-row items-center justify-center w-12 h-12 my-1 text-2xl text-gray-900 bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'
                aria-label='menu-button'
              >
                <div className='space-y-1'>
                  <span className='block w-8 h-1 bg-gray-600 dark:bg-gray-300'></span>
                  <span className='block w-8 h-1 bg-gray-600 dark:bg-gray-300'></span>
                  <span className='block w-8 h-1 bg-gray-600 dark:bg-gray-300'></span>
                </div>
              </Menu.Button>

              <Transition
                show={open}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='absolute right-0 z-10 p-2 text-gray-900 bg-gray-100 top-2 -mr-3 rounded-lg shadow-lg dark:bg-gray-700 '>
                  <div className='gap-1 p-1 w-28 flex flex-col'>
                  {children}
                  </div>
                </Menu.Items>
              </Transition>
            </React.Fragment>
          )}
        </Menu>
      </div>
    </header>
  )
}
