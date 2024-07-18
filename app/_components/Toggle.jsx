
// components/ToggleMenu.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LuFolderDown } from "react-icons/lu";
import { BsInfoCircle } from "react-icons/bs";
import { FaBars , FaAngleDown ,FaAngleUp ,FaTimes ,FaHome, FaFile ,FaAbout } from "react-icons/fa";
import styles from "./components.module.css"

const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

    const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <div>
      <button onClick={toggleMenu} className=" text-white rounded">
        {isOpen ?   <FaTimes/> : <FaBars className={styles.toggle} />}
      </button>
      {isOpen && (
        <div className={styles.sidenav }>
          <ul className="p-2">

            <li className="mb-2">
              <Link href="/mainpage" className="flex  items-center px-4 py-2 text-white hover:bg-gray-200 rounded hover:text-black font-bold font-serif">
                  <FaHome/> Home
              </Link>
            </li>
            
            <li className="mb-2 relative">
              <button onClick={toggleDropdown} className=" flex items-center w-full text-left px-4 py-2 text-white hover:bg-gray-200 hover:text-black rounded font-bold font-serif ml-1">
                <LuFolderDown /> projects {isDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}     
              </button>
              {isDropdownOpen && (
                <div className="relative  top-0 mt-2 w-48  rounded">
                  <ul className="p-2">
                    <li className="mb-2">
                      <Link onClick={closeMenu} href="/foe" className="block px-4 py-2 text-white hover:bg-gray-200 hover:text-black rounded font-bold font-mono">
                          FOE
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link onClick={closeMenu} href="/fast" className="block px-4 py-2 text-white hover:bg-gray-200  hover:text-black rounded font-bold font-mono">
                          FAST
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link onClick={closeMenu} href="/fbms" className="block px-4 py-2 text-white hover:bg-gray-200  hover:text-black rounded font-bold font-mono">
                          FBMS
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li className="mb-2">
              <Link onClick={closeMenu} href="#" className="flex items-center jus px-4 py-2  text-white hover:bg-gray-200 rounded hover:text-black font-bold font-serif">
                <BsInfoCircle /> About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ToggleMenu;
