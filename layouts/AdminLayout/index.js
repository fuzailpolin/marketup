import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link'
import { FaAngleDown, FaAngleUp, FaBookOpen, FaBars } from 'react-icons/fa'



const AdminLayout = ({children}) => {
    const miniMenu = useRef(null)
    const sidebar = useRef(null)
    const router = useRouter();
    const [show, setShow] = useState(true)




    const [down, setDown] = useState(true)

    const toggleNav = () => {
        if(sidebar.current.classList.contains('openNav')){
            sidebar.current.classList.remove('openNav')
            sidebar.current.classList.add('closeNav')

        }else{
            sidebar.current.classList.remove('closeNav')
            sidebar.current.classList.add('openNav')

        }
    }



    const toggleMenu = () => {
        if (miniMenu.current.classList.contains('invisible')) {
            miniMenu.current.classList.remove('invisible')
            miniMenu.current.classList.add('visible')
            setDown(false)
        } else {
            miniMenu.current.classList.remove('visible')
            miniMenu.current.classList.add('invisible')
            setDown(true)
        }
    }


    if(!show){
        return <div></div>
    }


    return (
        <div className="flex h-screen bg-gray-100 font-sans overflow-hidden">
            <div id="sidebar" ref={sidebar}
                 className="h-screen menu bg-white text-white closeNav flex items-center nunito static overflow-hidden relative  shadow">

                <ul className="list-reset">
                    <li className="my-2 md:my-0">
                        <a href="#"
                           className="flex py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">

                            <FaBookOpen className={'inline'}/>

                            <span className="block pl-2 md:pb-0 text-sm left-10">Dashboard</span>

                        </a>
                    </li>

                    <li className="my-2 md:my-0">
                        <Link href={'/dashboard/teams'}>
                            <a className="flex py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">

                                <FaBookOpen className={'inline'}/>

                                <span className="block pl-2 md:pb-0 text-sm left-10">Teams</span>

                            </a>
                        </Link>

                    </li>

                    <li className="my-2 md:my-0">
                        <Link href={'/dashboard/works'}>
                            <a
                               className="flex py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">

                                <FaBookOpen className={'inline'}/>

                                <span className="block pl-2 md:pb-0 text-sm left-10">Works</span>

                            </a>
                        </Link>
                    </li>

                    <li className="my-2 md:my-0">
                        <a href="#"
                           className="flex py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">

                            <FaBookOpen className={'inline'}/>

                            <span className="block pl-2 md:pb-0 text-sm left-10">Clients</span>

                        </a>
                    </li>


                    <li className="my-2 md:my-0">
                        <a href="#"
                           className="flex py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">

                            <FaBookOpen className={'inline'}/>

                            <span className="block pl-2 md:pb-0 text-sm left-10">Testimonials</span>

                        </a>
                    </li>


                    <li className="my-2 md:my-0">
                        <a href="#"
                           className="flex py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">

                            <FaBookOpen className={'inline'}/>

                            <span className="block pl-2 md:pb-0 text-sm left-10">Partnership</span>

                        </a>
                    </li>

                    <li className="my-2 md:my-0">
                        <a href="#"
                           className="flex py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">

                            <FaBookOpen className={'inline'}/>

                            <span className="block pl-2 md:pb-0 text-sm left-10">Job</span>

                        </a>
                    </li>


                    <li className="my-2 md:my-0">
                        <a href="#"
                           className="flex py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">

                            <FaBookOpen className={'inline'}/>

                            <span className="block pl-2 md:pb-0 text-sm left-10">Contacts</span>

                        </a>
                    </li>
                </ul>

            </div>

            <div className="flex flex-row flex-wrap flex-1 flex-grow content-start pl-2">

                <div className="w-full flex flex-wrap">

                    <nav id="header1"
                         className="bg-gray-100 w-auto flex-1 border-b-1 border-gray-300 order-1 lg:order-2">

                        <div className="flex h-full justify-between items-center">
                            <button onClick={toggleNav} className={'focus:outline-none pl-2'}>
                                <FaBars size={28} />
                            </button>

                            <div className="flex relative inline-block">

                                <div className="relative text-sm py-4 px-2">
                                    <button onClick={toggleMenu} className="flex items-center focus:outline-none mr-3">
                                        <span className="block mr-2">Hi, User </span>
                                        {
                                            down ? <FaAngleDown /> : <FaAngleUp />
                                        }


                                    </button>
                                    <div id="userMenu" ref={miniMenu}
                                         className="bg-white nunito rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 invisible">
                                        <ul className="list-reset">
                                            <li>
                                                <a href="#"
                                                   className="px-4 py-2 block text-gray-900 hover:bg-indigo-400 hover:text-white no-underline hover:no-underline">Logout</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>


                        </div>

                    </nav>
                </div>


                <div id="main-content" className="w-full flex-1 p-2 contain h-screen">
                    {children}

                </div>

            </div>


        </div>
    )
}

export default AdminLayout
