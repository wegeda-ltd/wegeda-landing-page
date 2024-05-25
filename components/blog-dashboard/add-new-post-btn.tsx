"use client";

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const AddNewPostBtn = () => {
    const router = useRouter()
    return (

        <button
            onClick={() => router.push('/blogs/create')}
            className='text-white text-[0.875rem] font-[600] rounded-[30px] bg-[#CF0058] h-[40px] w-[147px] flex items-center gap-[4px] justify-center'>
            <Image
                src={'/icons/add.svg'}
                alt='add'
                width={20}
                height={20}
            />

            <span>New Post</span>
        </button>
    )
}

export default AddNewPostBtn