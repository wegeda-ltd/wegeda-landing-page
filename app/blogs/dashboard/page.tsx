"use client";

import AddNewPostBtn from '@/components/blog-dashboard/add-new-post-btn'
import FilterModal from '@/components/blog-dashboard/filter-modal';
import BlogDashboardNav from '@/components/blog-dashboard/navbar'
import SimilarBlog from '@/components/similar-blog-card'
import { NewArray } from '@/utils/format';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { Suspense, useState } from 'react'

function Dashboard() {
    const router = useRouter()
    const [currentPage, setCurrentPage] = useState(1)
    const [showFilter, setShowFilter] = useState(false)

    const myBlogs = [
        1, 2, 3, 4, 5
    ]

    const getPages = () => {
        const totalSize = myBlogs.length / 9
        const all = NewArray(totalSize)

        if (currentPage + 3 < (totalSize)) {
            const pages = [...all.slice(currentPage - 1, currentPage + 3), '...', Math.ceil(totalSize)]

            return pages
        } else {
            let val = Math.ceil(Math.abs((totalSize - currentPage) - 1))

            const pages = [...NewArray(val), '...', ...all.slice(currentPage - 1, Math.ceil(currentPage + totalSize - currentPage))]
            return pages
        }

        // .
    }

    const onSelect = (cat: any) => {
        setShowFilter(false)
    }
    return (
        <div>
            <Suspense fallback={<div></div>}>
                <BlogDashboardNav />
            </Suspense>
            {myBlogs.length ?
                <>

                    <div className='bg-white top-[73px] fixed w-[100%] h-[73px] px-24 flex items-center justify-end border-b-[1px] z-[100]'>


                        <button
                            onClick={() => setShowFilter(true)}
                            className='text-[0.875rem] font-[600] gap-[4px] flex items-center justify-center border-[1px] border-[#222] rounded-[30px] h-[40px] w-[114px] animated-btn hover:scale-[0.95] '>
                            <Image
                                src={'/icons/filter.svg'}
                                alt='edit'
                                width={24}
                                height={24}
                            />
                            Filter
                        </button>

                    </div>

                    <div className='pt-[146px] '>

                        <div className='grid grid-cols-3 px-24 py-[32px] gap-[32px]'>

                            {myBlogs.map((_, index) => (
                                <SimilarBlog
                                    onClick={() => router.push(`/blogs/${100}?type=user`)}
                                    key={index} containerClassName='p-[24px] !drop-shadow-md bg-white rounded-[5px]' />
                            ))}
                        </div>


                    </div>
                </>

                :
                <div className='flex flex-col items-center justify-center h-[100vh] pt-[73px] bg-white'>
                    <Image
                        alt='no post'
                        src={'/icons/empty-post.png'}

                        width={107.04}
                        height={137.79}
                    />
                    <p className='mb-[24px] mt-[40.1px] text-[1rem] font-[500] text-center'>Hey, looks like you have not created a post yet!</p>
                    <AddNewPostBtn />
                </div>
            }


            {showFilter && <FilterModal onSelect={onSelect} />}
        </div>
    )
}

export default Dashboard