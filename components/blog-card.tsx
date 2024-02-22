import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

interface IBlog {
    id: string;
    author: string;
    date: string;
    title: string;
    subTitle: string;
}

function BlogCard({ id, author, date, title, subTitle }: IBlog) {
    const router = useRouter()
    return (
        <div
            onClick={() => router.push(`/blogs/${id}`)}
            className='blog-card hover:scale-[0.98] bg-white cursor-pointer flex items-center justify-between text-[#222]'>
            <div>
                <div className='flex items-center gap-[5px] text-[0.9375rem]'><p >{author} </p> <span > •</span> <time >{date}</time> </div>

                <h4 className='max-w-[410px] leading-[50px] font-[700] text-[2.0625rem] text-[#222] my-[4px]'>{title}</h4>
                <p
                    className='text-[1.25rem] max-w-[616px] leading-[35px]'
                >
                    {subTitle}
                </p>
            </div>


            <div className='relative border-[1px] rounded-[4px] border-[#CF0058] h-[200px] w-[392px]'>
                <Image
                    src={'/images/blog-image.png'}
                    alt='blog'
                    width={392}
                    height={200}
                    className='rounded-[4px] w-[392px] h-[200px] object-cover absolute bottom-[16px] left-[16px]'
                />
            </div>
        </div>
    )
}

export default BlogCard