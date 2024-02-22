"use client";

import Image from 'next/image'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function Navbar() {
    const router = useRouter()
    const path = usePathname();
    let maxWidth = 1620;
    const maxPercentage = 100;


    const handleResize = () => {
        if (typeof window !== "undefined") {
            let dimensions = {
                width: window.innerWidth,
                height: window.innerHeight,
            };

            let zoom =
                dimensions.width > 620 && dimensions.width < maxWidth
                    ? (dimensions.width * maxPercentage) / maxWidth
                    : 100;


            // @ts-ignore

            document.body.style.zoom = zoom + "%";

            dimensions.height = window.innerHeight;
            dimensions.width = window.innerWidth;

            zoom =
                dimensions.width > 620 && dimensions.width < maxWidth
                    ? (dimensions.width * maxPercentage) / maxWidth
                    : 100;

            // @ts-ignore
            document.body.style.zoom = zoom + "%";
        }
    }




    if (typeof window !== "undefined") {


        window.addEventListener("resize", handleResize);


    }

    useEffect(() => {
        handleResize()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const Links = [
        {
            label: 'Home',
            link: '/'
        },
        {
            label: 'About',
            link: '/about'
        },
        {
            label: 'Blog',
            link: '/blogs'
        },
    ]

    const getCurrentPage = (link: string) => {

        if (link === '/') {
            console.log("HERE")
            return path === link
        } else {
            console.log(path, link, "PATH")
            return path.includes(link)
        }
    }
    return (

        <nav className='z-[100] bg-white sm:px-24 px-10 sm:h-[120px] h-[100px] flex flex-col justify-center  fixed top-0  w-[100%] left-0'>

            <header className='flex items-center justify-between h-[50%]'>
                <Image
                    src={'/icons/logo-text.svg'}
                    alt='logo'
                    width={158.81}
                    height={51.16}
                    priority
                    className='sm:h-[51.16px] sm:w-[158.81px] w-[100px] h-[32.3px]'
                />

                {path.includes('blog') ?
                    <div className='flex justify-between items-center flex-[1]'>
                        <div />
                        <ul className='flex items-center gap-[48px] max-[620px]:hidden'>
                            {Links.filter(l => l.label.toLowerCase() !== 'about').map(({ link, label }, index) => (
                                <li key={index} className={`text-[#222] sm:text-[1rem] text-[0.875rem] font-[600]  ${getCurrentPage(link) ? 'nav-link-active' : 'nav-link'}`}>
                                    <Link href={link}>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className='flex items-center gap-[32px]'>
                            <span className={`text-[#222] sm:text-[1rem] text-[0.875rem] font-[600] nav-link`}>
                                <Link href={'/blog/signin'}>
                                    Sign in
                                </Link>
                            </span>
                            <button
                                onClick={() => router.push('/download')}
                                className='animated-btn text-white flex items-center justify-center sm:h-[44px] h-[28.44px] sm:w-[125px] w-[100px] rounded-[8px] sm:text-[1rem] text-[0.546875rem] font-[600] bg-[#CF0058] hover:border-[#CF0058] hover:bg-white hover:text-[#CF0058] hover:border-[1px]'>
                                Get started
                            </button>
                        </div>
                    </div> :
                    <div className='flex gap-[48px]'>
                        {/* <ul className='flex items-center gap-[48px] max-[620px]:hidden'>
                            {Links.map(({ link, label }, index) => (
                                <li key={index} className={`text-[#222] sm:text-[1rem] text-[0.875rem] font-[600]  ${path === link ? 'nav-link-active' : 'nav-link'}`}>
                                    <Link href={link}>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => router.push('/download')}
                            className='animated-btn text-white flex items-center justify-center sm:h-[60px] h-[28.44px] sm:w-[211px] w-[100px] rounded-[30px] sm:text-[1.125rem] text-[0.546875rem] font-[600] bg-[#CF0058] hover:border-[#CF0058] hover:bg-white hover:text-[#CF0058] hover:border-[1px]'>
                            Download
                        </button> */}
                    </div>}
            </header>

            {/* <ul className='flex items-center gap-[48px] sm:hidden mb-[-10px] mt-[15px]'>
                {Links.map(({ link, label }, index) => (
                    <li key={index} className={`text-[#222] sm:text-[1rem] text-[0.875rem] font-[600]  ${path === link ? 'nav-link-active' : 'nav-link'}`}>
                        <Link href={link}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul> */}

        </nav>
    )
}

export default Navbar