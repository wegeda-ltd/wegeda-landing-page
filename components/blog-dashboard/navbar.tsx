"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import AddNewPostBtn from './add-new-post-btn';
import axiosInstance from '@/helpers/axios-instance';



function BlogDashboardNav() {
    const path = usePathname();
    const tabParams = useSearchParams()
    const [showMenuItems, setShowMenuItems] = useState(false)
    const [user, setUser] = useState<{
        fullName: string,
        image: string,
        email: string
    } | null>()
    const router = useRouter()

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

    const getUser = async () => {

        let user;
        if (typeof window !== 'undefined') {
            user = localStorage.getItem('@blog-user')
            if (user) {
                user = JSON.parse(user)
            }
            setUser(user)
        }

        if (user) {

        } else {


            try {
                const response = await axiosInstance.get('/users/me')
                setUser(response.data.data.user)
                if (typeof window !== 'undefined') {
                    localStorage.setItem('@blog-user', JSON.stringify(response.data.data.user))
                }

            } catch (error) {
                console.log(error)
            }
        }

    }
    useEffect(() => {
        getUser()
    }, [])

    const tabs = [
        {
            name: 'Articles',
            link: '/blogs/dashboard?tab=articles'
        },
        {
            name: 'Draft',
            link: '/blogs/dashboard?tab=draft'
        },
        {
            name: 'Notification',
            link: '/blogs/dashboard/notification'
        },
    ]



    const isCurrentPage = (link: string) => {

        const param = tabParams.get('tab')

        if (param) {
            return `${path}?tab=${param}`.includes(link)

        } else {
            return path.includes(link)

        }



    }

    const menuItems = [
        {
            icon: '/icons/profile.svg',
            label: 'My profile',
            href: '/blogs/dashboard/profile'

        },
        {
            icon: '/icons/edit-profile.svg',
            label: 'Edit profile',
            href: '/blogs/dashboard/profile/edit'
        },
        {
            icon: '/icons/logout.svg',
            label: 'Log out',
            onPress: () => console.log('Log out')
        }

    ]
    const Menu = () => (
        <div className='bg-white drop-shadow-md rounded-[8px] min-w-[240px] min-h-[187px] fixed top-[78px] z-[100] right-[5%]'>
            <div className='flex items-center gap-[12px] px-[16px] py-[12px]'>
                <Image
                    src={user?.image ? user?.image : 'https://res.cloudinary.com/dijtpl380/image/upload/v1710079873/default-user_tavpsy.png'}
                    alt='dp'
                    width={40}
                    height={40}
                    className='rounded-full w-[40px] h-[40px] min-h-[40px] min-w-[40px] object-cover'
                />
                <div>
                    <h6 className='text-[#222] text-[0.875rem] font-[600]'>{user?.fullName}</h6>
                    <p className='text-[#7C7C7C] text-[0.875rem] leading-[20px]'>{user?.email}</p>
                </div>
            </div>

            {
                menuItems.map(({ label, icon, href, onPress }, index) => (
                    <button
                        onClick={href ? () => router.push(href) : onPress ? onPress : () => console.log("OK")}
                        key={index} className={`w-[100%] ${onPress ? 'border-t-[1px] border-t-[#F2F4F7]' : ''} animated-btn hover:bg-[#FAFAFA] flex items-center gap-[12px] px-[16px] py-[10px]`}>
                        <Image
                            alt={label}
                            src={icon}
                            width={16}
                            height={16}
                        />

                        <h6 className='font-[500] text-[0.875rem]'>{label}</h6>
                    </button>
                ))
            }
        </div>
    )
    return (
        <nav className='fixed w-[100%] top-[0] z-[1000] px-24 flex items-center justify-between h-[73px] bg-white border-b-[1px]' >

            <div className='flex items-center'>
                <Link href={'/blogs/dashboard'} className='mr-[40px]'>
                    <Image
                        src={'/icons/logo.png'}
                        alt='logo'
                        width={32}
                        height={32}
                    />
                </Link>

                <ul className='flex items-center gap-[4px]'>
                    {tabs.map(({ link, name }, index) => (
                        <li key={index} className={`${isCurrentPage(link) ? 'bg-[#EDEEf1] rounded-[6px]' : ''} text-[1rem] text-[#222] font-[700] h-[40px] px-[12px] flex items-center `}>
                            <Link href={link}>
                                {name}
                            </Link>
                        </li>

                    ))
                    }
                </ul>

            </div>

            <div className='px-[14px] border-[1px] h-[40px] w-[320px] border-[#DDD] flex items-center overflow-hidden rounded-[32px]'>
                <label htmlFor='search'>
                    <Image
                        src={'/icons/search.svg'}
                        width={20}
                        height={20}
                        alt='search'
                    />
                </label>

                <input id='search' placeholder='Search' className='px-[8px] focus:outline-none w-[100%] text-[1rem]' />
            </div>


            <div className='flex items-center gap-[16px]'>

                <AddNewPostBtn />

                <button
                    onClick={() => setShowMenuItems(!showMenuItems)}
                    className=' h-[40px] w-[76px]  border-[1px] border-[#222] flex items-center  justify-center gap-[8px] rounded-[30px]'>
                    <Image
                        src={user?.image ? user?.image : 'https://res.cloudinary.com/dijtpl380/image/upload/v1710079873/default-user_tavpsy.png'}
                        alt='profile'
                        height={24}
                        width={24}
                        className='rounded-[120px] object-cover w-[24px] h-[24px]'
                    />
                    <Image
                        src={'/icons/menu.svg'}
                        alt='menu'
                        height={20}
                        width={20}
                    />


                </button>
            </div>
            {showMenuItems && <Menu />}
        </nav>
    )
}

export default BlogDashboardNav