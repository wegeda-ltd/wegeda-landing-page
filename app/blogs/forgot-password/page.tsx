"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'

function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [editEmail, setEditEmail] = useState(false)

    const router = useRouter()

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push('/blogs/reset-password')
    }
    return (
        <div className='min-h-[100vh] flex justify-center py-[120px] bg-white'>
            <form onSubmit={onSubmit} className='flex flex-col items-center w-[360px]'>
                <Image
                    src={'/icons/logo.png'}
                    alt='logo'
                    width={33.59}
                    height={32}
                />

                <h3 className='mt-[24px] font-[700] text-[1.875rem] text-center'>Forgot your password?</h3>
                <p className='mt-[12px] text-[1rem] font-[500]'>We&apos;ll email instructions on how to reset it</p>

                <div className='mt-[32px] w-[100%]'>
                    <div className='w-[100%]'>
                        <label htmlFor='email' className='block mb-[6px] text-[0.875rem]'>Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type='email' id="email" placeholder='Enter your email' className='text-[0.9rem] outline-none px-[14px] w-[100%] h-[44px] rounded-[6px] border-[1px] border-[#ABABAB]' required />
                    </div>

                    <div className='my-[16px] flex items-center justify-end w-[100%] text-[0.875rem]'>


                        <button
                            type='button'

                            onClick={() => setEditEmail(true)}
                            className='text-[#CF0058] font-[700]'>Change email</button>

                    </div>

                    <button className='mb-[24px] w-[100%] h-[50px] rounded-[30px] bg-[#CF0058] text-white text-[1rem] font-[700] hover:bg-white hover:scale-[0.94] hover:text-[#CF0058] border-[1px] border-[#CF0058] animated-btn'>
                        Reset password
                    </button>
                </div>





            </form>
        </div>
    )
}

export default ForgotPassword