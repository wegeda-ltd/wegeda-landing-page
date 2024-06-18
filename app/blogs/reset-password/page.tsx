"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'

function ResetPassword() {
    const [confirmPassword, setConfirmPassword] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [confirmFocused, setConfirmFocused] = useState(false)

    const router = useRouter()

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
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

                <h3 className='mt-[24px] font-[700] text-[1.875rem] text-center'>Reset your password?</h3>
                <p className='mt-[12px] text-[1rem] font-[500]'>Create password for <b>James.oko@gmail.com</b></p>

                <div className='mt-[32px] w-[100%]'>
                    <div className='w-[100%] mb-[16px]'>
                        <label htmlFor='password' className='block mb-[6px] text-[0.875rem]'>New Password</label>
                        <div className='gap-[14px] flex items-center text-[0.9rem] outline-none px-[14px] w-[100%] h-[44px] rounded-[6px] border-[1px] border-[#ABABAB]'>
                            <input value={password} onChange={e => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} id="password" placeholder='Password' className='outline-none w-[100%]' />
                            <button
                                type='button'
                                onClick={() => setShowPassword(prev => !prev)}
                            >

                                <Image
                                    src={'/icons/hide-password.svg'}
                                    alt='hide'
                                    width={16}
                                    height={16}
                                    className={`${showPassword ? 'rotate-[180deg]' : ''}`}
                                />
                            </button>
                        </div>
                    </div>
                    <div className='w-[100%] mb-[16px]'>
                        <label htmlFor='confirm-password' className='block mb-[6px] text-[0.875rem]'>Confirm Password</label>
                        <div className={`${confirmFocused && confirmPassword.length && password !== confirmPassword ? 'border-[#FD5839]' : 'border-[#ABABAB]'} gap-[14px] flex items-center text-[0.9rem] outline-none px-[14px] w-[100%] h-[44px] rounded-[6px] border-[1px] `}>
                            <input
                                onFocus={() => setConfirmFocused(true)}
                                // onBlur={() => setConfirmFocused(false)}
                                value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type={showPassword ? 'text' : 'password'} id="confirm-password" placeholder='Password' className='outline-none w-[100%]' />
                            <button
                                type='button'
                                onClick={() => setShowPassword(prev => !prev)}
                            >

                                <Image
                                    src={'/icons/hide-password.svg'}
                                    alt='hide'
                                    width={16}
                                    height={16}
                                    className={`${showPassword ? 'rotate-[180deg]' : ''}`}
                                />
                            </button>
                        </div>
                    </div>


                    <button disabled={!password.length || confirmPassword !== password} className={`${password.length && password === confirmPassword ? 'bg-[#CF0058] hover:bg-white hover:scale-[0.94] hover:text-[#CF0058] border-[1px] border-[#CF0058]' : 'bg-[#EDEEF1] cursor-not-allowed'} mb-[24px] w-[100%] h-[50px] rounded-[30px]  text-white text-[1rem] font-[700]  animated-btn`}>
                        Reset password
                    </button>
                </div>





            </form>
        </div>
    )
}

export default ResetPassword