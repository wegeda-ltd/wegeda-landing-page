"use client"

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Paginate from '@/components/paginate'
import { blogs } from '@/data/blogs'
import Image from 'next/image'
import React, { useState } from 'react'



const pagination = {
    next_page: 2,
    curr_page: 1,
    total: 30,
    per_page: 10,
    last_page: 3,
    data: blogs
};


function Blog() {
    const tabs = [
        'All', 'Tips for roommates', 'Tips for landlords', 'Neighbor spotlights', 'Roommates success stories', 'Others'
    ]


    const [currTab, setCurrTab] = useState(tabs[0])
    return (
        <div className="min-h-[100vh] relative sm:mt-[120px]">
            <Navbar />

            <header className='p-24 pt-[80px] pb-[56px] bg-[#FFFAFC] flex flex-col items-center '>
                <h2 className='text-center font-[700] text-[3rem] mb-[24px]'>The Wegeda Blog</h2>
                <p className='text-center font-[500] text-[1.125rem]'>Update and announcements from Team Wegeda </p>


                <form className='mt-[40px]'>
                    <div className='flex items-center gap-[16px]'>
                        <div className='form-group w-[480px] h-[43px] border-[1px]'>
                            <input
                                className=''
                                placeholder='Enter your email'
                            />
                        </div>

                        <button className='rounded-[8px] h-[44px] w-[112px]  animated-btn text-white flex items-center justify-center sm:text-[1rem] text-[0.546875rem] font-[600] bg-[#CF0058] hover:border-[#CF0058] hover:bg-white hover:text-[#CF0058] hover:border-[1px]'>
                            Subscribe
                        </button>

                    </div>
                    <p className='mt-[8px] text-[0.8rem] text-[#222]'>You can unsubscribe at any time. Learn more about our privacy policy</p>

                </form>

            </header>

            <main className='p-24 pt-[80px] pb-[56px] bg-[#fff]'>

                <div className='flex items-center gap-[24px]'>

                    <ul className='flex items-center gap-[8px] w-fit border-b-[1px] border-b-[#DDD]'>
                        {tabs.map((tab, index) => (
                            <li onClick={() => setCurrTab(tab)} className={`${currTab === tab ? 'nav-link-active border-b-[2px]' : 'nav-link'} cursor-pointer text-[1.12rem] font-[700] px-[20px] py-[12px] `} key={index}>{tab}</li>
                        ))}

                    </ul>

                    <button
                        className='w-[52px] h-[48px] rounded-[8px] border-[1.5px] border-[#EDEEF1] flex items-center justify-center ml-[20px]'
                    >
                        <Image
                            src={'/icons/more.svg'}
                            alt='more'
                            width={20}
                            height={20}
                            className='rotate-[90deg]'
                        />
                    </button>

                </div>


                <div className='blogs mt-[48px] pr-[16px]'>

                    <Paginate per_page={3} pagination={pagination}>
                    </Paginate>
                    {/* {[0, 0, 0, 0].map((_, index) => (
                        <BlogCard key={index} />
                    ))} */}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Blog