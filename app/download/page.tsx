"use client";


import Chat from '@/components/chat';
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Image from 'next/image';
import React from 'react'

function Download() {
    return (
        <div className="min-h-[100vh] relative">
            <Navbar />

            <main className="sm:mt-[120px] mt-[100px] h-[100%]">
                <div className='flex p-8 overflow-y-hidden sm:flex-row flex-col-reverse'>

                    <div className='flex flex-col items-center flex-[2] sm:h-[575px] relative max-[620px]:w-[100%]  overflow-hidden '>
                        <Image
                            src={'/icons/phones.png'}
                            alt='demo'
                            width={565.47}
                            height={565}

                            className='sm:w-[100%] sm:h-[565px] object-fit  z-[1] relative self-center 2xl:ml-[-15%] sm:ml-[-5%] ml-[12%]'
                            style={{
                                height: 'auto',
                                width: 'auto'
                            }}
                        />

                        <div className='w-[98%] aspect-video overflow-y-hidden self-center sm:mt-[-25%] mt-[-55%] 2xl:ml-[15%] lg:ml-[10%] sm:ml-[10%] ml-[2%]'>
                            <div className='top-[250px]   bg-[#CF0058] sm:h-[767.53px] w-[98%] aspect-square sm:w-[767.53px] rounded-full' />
                        </div>

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

            <Chat />
        </div>
    )
}

export default Download