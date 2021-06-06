import {useState} from "react";
import {FaAlignRight} from 'react-icons/fa'


import SubNavItems from "./SubNavItems";
import logo from '../../../Assets/Images/logo.gif'

import './header.css'


const HeaderComponent = () => {
    const [open, setOpen] = useState(false)


    return (
        <header>
            <div className="grid grid-cols-4 shadow-md">
                <div className={'pl-2 md:pl-5'}>
                    <img src={logo} className={'w-16'} alt="Logo"/>
                </div>
                <div className="col-span-3 flex items-center justify-end font-poppins">
                    <nav>
                        <ul className={'desktop-nav'}>
                            <SubNavItems/>
                        </ul>
                        <FaAlignRight onClick={() => setOpen(!open)}
                                      className={'text-gray-600 inline-block md:hidden mr-5'} size={24}/>
                        <div
                            className={`fixed w-2/3 transition-all -top-0 duration-500 bg-white h-screen ${open ? '-left-0': '-left-full'}`}>
                            <div className={'pl-4'}>
                                <img src={logo} className={'w-16'} alt="logo"/>
                            </div>
                            <hr/>
                            <ul className={'mobile-nav'} onClick={() => setOpen(false)}>
                                <SubNavItems/>
                            </ul>
                        </div>

                        <div onClick={() => setOpen(false)}
                            className={`fixed w-1/3 transition-all -top-0 duration-150 bg-black bg-opacity-20 h-screen ${open ? '-right-0': 'right-full'}`}>

                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent