"use client";


import Image from 'next/image';
import { useRouter } from 'next/navigation';

import React from 'react';

interface ISimilarBlog {
    containerClassName?: string;
    onClick?: () => void
}
function SimilarBlog({ containerClassName, onClick }: ISimilarBlog) {
    const router = useRouter()

    return (
        <div
            onClick={onClick ? onClick : () => router.push(`/blogs/${100}`)}

            className={`w-[100%]  pointer similar-card pb-[22px] ${containerClassName}`}>
            <Image
                src={'/images/more-1.png'}
                alt='more'
                width={389.33}
                height={240}
                className='w-[100%] h-auto'
            />

            <div className='mt-[32px]'>
                <h6 className='text-[#A60046] font-[600] text-[0.9375rem] mb-[12px]'>Inside Life</h6>

                <div className='mb-[12px] flex items-center justify-between'>
                    <h4 className='w-[90%] truncate font-[700] text-[1.5rem]' >Roommate tips</h4>

                    <Image
                        src={'/icons/arrow.svg'}
                        alt='go'
                        width={24}
                        height={28}
                    />
                </div>

                <p className='text-[1rem] font-[500] leading-[24px] text-[#222] line-clamp-2'>
                    Lorem ipsum dolor sit amet consectetur. Metus vitae facilisis quis proin felis at ornare nisl neque.   Lorem ipsum dolor sit amet consectetur. Metus vitae facilisis quis proin felis at ornare nisl neque
                </p>

                <div className='mt-[32px] flex items-center gap-[5px] text-[0.9375rem] font-[600]'><p >Ken Okon </p> <span > •</span> <time >19 Jan 2024</time> </div>

            </div>
        </div>
    )
}

export default SimilarBlog