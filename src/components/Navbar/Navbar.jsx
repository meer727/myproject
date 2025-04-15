import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../assets/logo.png'

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Technologies', href: '#', current: false },
    { name: 'Services', href: '#', current: false },
    { name: 'Products', href: '#', current: false },
    { name: 'About Us', href: '#', current: false },
    { name: 'Blog', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="sticky top-0 z-50 bg-black/20 backdrop-blur-md shadow-md">
            <div className="h-19 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center justify-between">
                <div className="flex shrink-0 items-center">
                    <img
                        alt="Your Company"
                        src={logo}
                        className="h-12 w-auto"
                    />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4 border border-[#242424] rounded-full px-6">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                aria-current={item.current ? 'page' : undefined}
                                className={classNames(
                                    item.current ? 'text-yellow-500' : 'text-gray-300 hover:text-yellow-500',
                                    'rounded-md px-3 py-2 text-lg font-medium',
                                )}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex items-center sm:static sm:inset-auto sm:ml-6">
                    <Menu as="div" className="relative ml-3">
                        <div>
                            <MenuButton className="relative flex text-md text-white px-4 py-2 border-2 border-[#56364a] font-medium rounded-sm" style={{ backgroundColor: '#A0467E66' }}>
                                Get Started
                            </MenuButton>
                        </div>
                    </Menu>
                </div>
            </div>
        </Disclosure>
    )
}
