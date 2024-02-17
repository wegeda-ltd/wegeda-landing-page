import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer className='sm:p-24 p-10 sm:pb-[30px] pb-[20px] bg-[#FFFAFC]'>
            <div className="">
                <h6 className='text-center font-[500] sm:text-[1.4375rem] text-[1.125rem] text-[#CF0058] mb-[32px]'>Contact Us</h6>
                <div className="flex items-center justify-center gap-[32px]">
                    <a
                        href="https://twitter.com/wegeda_hq"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/icons/twitter.png"
                            alt="logo"
                            width={60}
                            height={60}
                            className='sm:w-[60px] sm:h-[60px] w-[30px] h-[30px]'
                        />
                    </a>

                    <a
                        href="https://www.instagram.com/wegeda_hq/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/icons/instagram.png"
                            alt="logo"
                            width={60}
                            height={60}
                            className='sm:w-[60px] sm:h-[60px] w-[30px] h-[30px]'
                        />
                    </a>

                    <a
                        href="https://www.facebook.com/wegedahq"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/icons/facebook.png"
                            alt="logo"
                            width={60}
                            height={60}
                            className='sm:w-[60px] sm:h-[60px] w-[30px] h-[30px]'
                        />

                    </a>
                </div>
            </div>

            <div className="flex justify-between mt-[24px]">
                <Image
                    src="/icons/logo-text.svg"
                    alt="logo"
                    width={105}
                    height={33.91}
                    className='sm:w-[105px] sm:h-[33.91px] w-[85px] h-[27.45px]'
                />

                <div className="flex items-center gap-[10px] text-[#CF0058] sm:text-[1.125rem] text-[0.875rem] font-[500]">

                    <Link href="/#" passHref target='_blank' rel='noreferrer noopener'>
                        Privacy Policy
                    </Link>
                    <Link href="/#" passHref target='_blank' rel='noreferrer noopener'>

                        Terms of use
                    </Link>
                </div>
            </div>
        </footer>


    )
}

export default Footer