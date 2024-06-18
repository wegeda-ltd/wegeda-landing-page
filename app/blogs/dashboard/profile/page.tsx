"use client";

import FooterNewsLetter from '@/components/blog-dashboard/footer-newsletter';
import BlogDashboardNav from '@/components/blog-dashboard/navbar'
import Footer from '@/components/footer';
import SimilarBlog from '@/components/similar-blog-card'
import axiosInstance from '@/helpers/axios-instance';
import { NewArray } from '@/utils/format'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const socials = [
    { title: 'twitter', icon: '/icons/x.svg' },
    { title: 'facebook', icon: '/icons/fb.svg' },
    { title: 'linkedin', icon: '/icons/lin.svg' },
]

function Profile() {
    const router = useRouter()
    const [user, setUser] = useState<{
        fullName: string,
        image: string,
        email: string,
        accountType: string,
        bio: string
    } | null>()


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

    return (
        <div>
            <BlogDashboardNav />
            <div className='bg-[#FFFAFC] py-[96px] flex items-center justify-center mt-[73px] gap-[26px]'>

                <Image
                    alt='dp'
                    src={user?.image || ''}
                    height={336}
                    width={336}
                    className='rounded-[16.8px] min-h-[336px] h-[336px] w-[336px] object-cover min-w-[336px]'
                />

                <div>
                    <h4 className='text-[1.5rem] text-[#222] font-[700]'> {user?.fullName}</h4>
                    <h6 className='mt-[8px] text-[#A60046] font-[500] text-[1.25rem] capitalize'>{user?.accountType}</h6>

                    <p className='mt-[16px] text-[#7C7C7C] text-[1rem] leading-[24px] max-w-[454px]'>{user?.bio}</p>

                    <div className='flex gap-[20px] mt-[24px]'>
                        {
                            socials.map((social, index) => (
                                <button key={index} className='social-share flex items-center justify-center '>
                                    <Image
                                        src={social.icon}
                                        alt={social.title}
                                        height={24}
                                        width={24}
                                    />
                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='pt-[132px] pb-[96px] bg-white px-24'>
                <h3 className='text-[2.25rem] text-[#000]'>Articles by {user?.fullName}</h3>

                <div className='grid grid-cols-3 gap-[32px] mt-[64px]'>

                    {NewArray(9).map((_, index) => (
                        <SimilarBlog
                            onClick={() => router.push(`/blogs/${100}?type=user`)}
                            key={index} containerClassName='' />
                    ))}


                </div>

                <div className='flex justify-center mt-[64px]'>
                    <button className={`bg-[#CF0058] border-[1px] border-[#CF0058] text-white text-[0.875rem] font-[600] gap-[4px] flex items-center justify-center  rounded-[30px] h-[40px] px-[30px] animated-btn hover:scale-[0.95]`}>
                        See more
                    </button>
                </div>
            </div>

            <div className='py-[40px] px-[24px]'>
                <FooterNewsLetter />

            </div>
            <Footer />
        </div>
    )
}

export default Profile