import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'

const navigation = [
  { name: 'Dashboard', href: '#dashboard', current: true },
  { name: 'About Me', href: '#about-me', current: false },
  { name: 'Services', href: '#services', current: false },
  { name: 'Experience', href: '#experience', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Contact Me', href: '#contact-me', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="sm:flex sm:justify-center bg-[#1c1c1c] sm:min-h-[10vh] fixed shadow-md w-full z-50">
      <div className="">
        <div className="relative flex items-center justify-center sm:justify-between h-16">
          <div className="hidden sm:flex sm:items-center sm:justify-center">
            <div className="hidden ml-6 sm:ml-0 sm:block">
              <div className="flex">
                {navigation.map((item) => (
                    <Link key={item.name} href={item.href} aria-current={item.current ? 'page' : undefined} className="text-sm px-3 md:px-8 md:py-2 -mb-px md:text-center md:bg-transparent sm:border-b-3 font-semibold sm:border-gray-200 sm:text-base text-gray-200  cursor-base sm:focus:outline-none 
                  hover:text-teal-400
                  hover:border-teal-400
                  transition-colors duration-300">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 sm:hidden">
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <FaBars aria-hidden="true" className="block size-6 text-gray-200" />
                </MenuButton>

              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-200  text-[#0f0f0f] py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                {navigation.map((item) => (
                  <MenuItem key={item.name}>
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-[#0f0f0f] data-focus:outline-hidden data-focus:text-gray-200 data-focus:font-semibold" 
                      >
                      {item.name}
                    </a>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}