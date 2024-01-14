import React, { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-scroll'
import navigation from '../../Constants/navigation'
import CustomDisclosureButton from '../../Common/CustomDisclosureButton'

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
};

const HeadNavbar = () => {
  const [currentItem, setCurrentItem] = useState(null);

  const handleItemClick = (index) => {
    setCurrentItem(index);
  };

  return (
    <Disclosure as="nav" className="bg-gray-800 shadow-md">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between px-12">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden md:block">
                <div className="flex flex-shrink-0 items-center gap-2">
                    <p className='text-indigo-500 text-3xl font-bold cursor-pointer'>.aj</p>
                    <div className='flex flex-col gap-1'>
                        <p className="text-sm text-white font-semibold">Jidar Ahmed Amin</p>
                        <p className='text-xs text-gray-400 font-normal'>Software Engineering</p>
                    </div>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item, idx) => (
                      <Link
                        key={item.name}
                        to={item.link}
                        smooth
                        duration={200}
                        onClick={() => handleItemClick(idx)}
                        className={classNames(
                          currentItem == idx ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white focus:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button 
                    className='flex gap-2 text-white hover:text-white text-sm font-medium rounded hover:bg-indigo-600 bg-gray-700 px-3 py-2'
                    onClick={() => window.location.href = "mailto:justup1080@gmail.com"}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                    <p>Connect</p>
                </button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <CustomDisclosureButton
                  key={item.name}
                  id={item.link}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium cursor-pointer'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </CustomDisclosureButton>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default HeadNavbar;