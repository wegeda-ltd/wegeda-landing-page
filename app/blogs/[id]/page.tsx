import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

const socials = [

]
function BlogDetail() {

    return (
        <div className="min-h-[100vh] relative sm:mt-[120px]">
            <Navbar />
            <div className='p-24 pt-[24px]'>

                <header>
                    <h6 className='font-[600] text-[0.9375rem] text-[#7C7C7C] mb-[12px]'>Product Updates <span className='text-[#000]'>13 Feb 2024</span></h6>
                    <h2 className='font-[700] text-[3rem] w-[90%] mb-[24px] leading-[60px]'>10 Ways to find your perfect roommate match in Lagos </h2>

                    <div className='flex items-center justify-between font-[600] text-[1.125rem]'>
                        <p className='text-[#A60046]'>Tips for Roommates</p>

                        <div className='flex items-center gap-[40px]'>
                            <p className='underline'>Lukman Bello</p>
                            <p>Last updated 14 Feb 2024</p>

                        </div>
                    </div>


                </header>

                <main className='py-[40px] px-[24px]'>

                    <div className='flex items-center gap-[32px]'>
                        <div>

                        </div>
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    )
}

export default BlogDetail