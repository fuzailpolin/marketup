import { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import Link from "next/link";

import SubNavItems from "./menuItems";

import style from "./Header.module.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={
        "shadow bg-white z-50 border-b-2 border-gray-300 sticky -top-0 -left-0"
      }
    >
      <div className="grid grid-cols-4">
        <div className={"pl-2 md:pl-5 flex items-center cursor-pointer"}>
          <Link href={"/"}>
            <img src={"/Images/logo.gif"} className={"w-16"} alt="Logo" />
          </Link>
          <Link href={"/"}>
            <p
              className={
                "text-secondary font-typoSlab text-xl md:text-2xl z-10"
              }
            >
              market<span className={"text-primary"}>UP<span className={'font-poppins'}>.</span></span>
            </p>
          </Link>
        </div>
        <div className="col-span-3 flex items-center justify-end font-poppins">
          <nav>
            <ul className={style["desktop-nav"]}>
              <SubNavItems />
            </ul>
            <FaAlignRight
              onClick={() => setOpen(!open)}
              className={
                "text-gray-600 inline-block lg:hidden mr-5 cursor-pointer"
              }
              size={24}
            />
            <div
              className={`fixed z-30 w-2/3 transition-all -top-0 duration-500 bg-white h-screen ${
                open ? "-left-0" : "-left-full"
              }`}
            >
              <div className={"pl-4 flex items-center cursor-pointer"}>
                <Link href={"/"}>
                  <img src={"Images/logo.gif"} className={"w-16"} alt="logo" />
                </Link>
                <Link href={"/"}>
                    <p
                  className={
                    "text-secondary font-typoSlab text-xl md:text-2xl z-10"
                  }
                >
                  market<span className={"text-primary"}>UP<span className="font-poppins">.</span></span>
                </p>
                </Link>
              </div>
              <hr />
              <ul
                className={style["mobile-nav"]}
                onClick={() => setOpen(false)}
              >
                <SubNavItems />
              </ul>
            </div>

            <div
              onClick={() => setOpen(false)}
              className={`z-10 fixed w-full transition-all -top-0 duration-150 bg-black bg-opacity-20 h-screen ${
                open ? "-right-0 opacity-100" : "right-full opacity-0"
              }`}
            ></div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
