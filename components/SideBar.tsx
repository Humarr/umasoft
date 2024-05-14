import { Disclosure, DisclosureButton, Menu } from '@headlessui/react'
import { MenuIcon, MenuSquare } from 'lucide-react'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiMenu3Line } from 'react-icons/ri'
import { Button } from './ui/button'

const SideBar = () => {
    return (
        // <div className=''>
            <Disclosure>

                <DisclosureButton

                    className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-dark hover:text-white focus:outline-none focus:ring-red-200 focus:ring-2 focus:ring-inset group hover:bg-dark">

                    <GiHamburgerMenu className="block md:hidden h-6 w-6" aria-hidden='true' />
                </DisclosureButton>

                <div className='p-6 w-1/2 h-screen bg-danger '>

                    

                </div>

            </Disclosure>
        // </div>
    )
}

export default SideBar
