import React, { Children, ReactNode, useState } from 'react'
import BlogCard from './blog-card';
import { NewArray } from '@/utils/generate-array';
import Image from 'next/image';

interface IPaginate {
    pagination: {
        next_page: number,
        curr_page: number,
        last_page: number;
        total: number,
        per_page: number,
        data: any[]
    };
    per_page: number;

}
function PaginateBlogs({ pagination, per_page }: IPaginate) {

    const [currentPage, setCurrentPage] = useState(pagination.curr_page)

    const getPages = () => {
        const totalSize = pagination.data.length / per_page
        const all = NewArray(totalSize)

        if (currentPage + 3 < (totalSize)) {
            const pages = [...all.slice(currentPage - 1, currentPage + 3), '...', Math.ceil(totalSize)]

            return pages
        } else {
            let val = Math.ceil(Math.abs((totalSize - currentPage) - 1))

            // console.log(Math.ceil(totalSize - ))
            console.log(currentPage + totalSize - currentPage)
            const pages = [...NewArray(val), '...', ...all.slice(currentPage - 1, Math.ceil(currentPage + totalSize - currentPage))]
            return pages
        }

        // .
    }
    return (
        <div className='flex flex-col gap-[64px]'>
            {[...pagination.data].slice((currentPage - 1) * per_page, per_page + (currentPage - 1) * per_page).map(({ id, author, date, subTitle, title }, index) => (
                <BlogCard id={id} author={author} date={date} title={title} subTitle={subTitle}
                    key={index}
                />
            ))}

            <div className='flex items-center gap-[3px] justify-center gap-[10px]'>
                <button
                    onClick={() => setCurrentPage(prev => 1 < prev ? prev - 1 : prev)}

                    className='rounded-[2px] flex items-center justify-center w-[32px] h-[32px] border-[1px]'>
                    <Image
                        src={'/icons/more.svg'}
                        alt='prev'
                        width={12}
                        height={12}
                        className='min-w-[12px] min-h-[12px] w-[12px] h-[12px] rotate-[-90deg]'
                    />
                </button>

                {getPages().map((page, index) => (
                    <button
                        key={index}
                        onClick={() => typeof page === 'number' ? setCurrentPage(page) : null}

                        className={`rounded-[2px] text-[0.875rem] font-[600] flex  ${typeof page === 'number' ? 'items-center' : 'items-start'} justify-center w-[32px] h-[32px] border-[1px] ${currentPage === page ? 'active-page' : ''}`}>
                        <span>{page}</span>
                    </button>
                ))}
                <button
                    onClick={() => setCurrentPage(prev => pagination.last_page >= prev ? prev + 1 : prev)}
                    className='rounded-[2px] flex items-center justify-center w-[32px] h-[32px] border-[1px]'>
                    <Image
                        src={'/icons/more.svg'}
                        alt='prev'
                        width={12}
                        height={12}
                        className='min-w-[12px] min-h-[12px] w-[12px] h-[12px] rotate-[90deg]'
                    />
                </button>
            </div>
        </div>
    )
}

export default PaginateBlogs