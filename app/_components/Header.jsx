import React from 'react'
import Link from 'next/link'
import { auth } from "@clerk/nextjs/server";
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import styles from "./components.module.css"
import Toggle from './Toggle';

const Header = () => {
    const {userId} = auth();

return (
    <>
    <nav className='bg-gradient-to-b from-indigo-700 to-blue-400 ... py-4 px-6 flex items-center justify-between mb-5'>
        
            {userId &&(

        <Toggle/>
            )}
        <div>
            <Link href="/">
                <div className={styles.logo}>
                <Image
                className=  ''
                src="/new_logo.png"
                alt="app logo"
                width={60 }
                height={10}
                priority
                />
        </div>
            </Link>     
        </div>
        <div className="text-white flex items-center justify-between">  
        {!userId && (
            <>
            <button className=' bg-white m-2 p-1 rounded-md items-center justify-center'>

            <Link href="sign-in" className=' text-black -300 '>
                sign-in
            </Link>
            </button>
            <button className='  bg-white m-3 p-1 rounded-md items-center justify-center '>

            <Link href="sign-up" className=' text-black delay-300'>
                sign-up
            </Link>
            </button>
            </>
        )}
        <div className=' ml-auto '>
            <UserButton/>
        </div>
        </div>   
    </nav>
    </>
)
}

export default Header
