"use client";


import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Image from 'next/image';
import React from 'react'

function Download() {
    return (
        <div className="min-h-[100vh] relative">
            <Navbar />

            <main className="sm:mt-[120px] mt-[100px] h-[100%]">
                <div className='flex p-10 overflow-y-hidden sm:flex-row flex-col-reverse'>

                    <div className='flex-[2] h-[575px] relative max-[620px]:w-fit'>
                        <Image
                            src={'/icons/phones.svg'}
                            alt='demo'
                            width={565.47}
                            height={565}

                            className='sm:w-[100%] sm:h-[565px] z-[1] relative'
                        />

                        <div className='absolute top-[250px] 2xl:left-[140px] sm:left-[100px] left-[-10%]  bg-[#CF0058] sm:h-[767.53px] h-[500px] w-[500px] sm:w-[767.53px] rounded-full' />


                    </div>

                    <div className='flex-[1] sm:text-[5rem] text-[3rem] font-[700] text-[#222]'>
                        <h2>Live the<br />Life you</h2>
                        <h2 className='text-[#CF0058]'>Deserve</h2>

                        <div className="flex items-center gap-[15px] mt-[50px] max-[620px]:mb-[50px]">
                            <button>
                                <Image
                                    src={'/icons/appstore.svg'}
                                    alt="app store"
                                    width={149.35}
                                    height={44.64}
                                />
                            </button>
                            <button>
                                <Image
                                    src={'/icons/playstore.svg'}
                                    alt="app store"
                                    width={149.35}
                                    height={44.64}
                                />
                            </button>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Download