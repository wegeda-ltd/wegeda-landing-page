"use client";

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'

interface IAuth {
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    title: string;
    subtitle: string;
    btnLabel: string;
    footerText: string;
    footerLink: string;
    footerLinkText: string;
    rememberMe?: boolean;
    loading?: boolean;
    setRememberMe?: (remember: boolean) => void;
    isLogin?: boolean;
}

function Auth({
    btnLabel,
    email,
    setEmail,
    password,
    setPassword,
    title,
    loading,
    onSubmit,
    subtitle,
    footerLink,
    footerLinkText,
    footerText,
    rememberMe,
    setRememberMe,
    isLogin,
}: IAuth) {
    const signupOptions = [
        {
            name: "Google",
            label: 'Sign up with Google',
            icon: '/icons/google.svg',
            bg: 'bg-[#fff]',
            textColor: 'text-[#000]'
        },
        {
            name: "Facebook",
            label: 'Sign up with Facebook',
            icon: '/icons/fb-white.svg',
            bg: 'bg-[#4267B2]',
            textColor: 'text-[#fff]'
        },
        {
            name: "Apple",
            label: 'Sign up with Apple',
            icon: '/icons/apple.svg',
            bg: 'bg-[#000]',
            textColor: 'text-[#fff]'
        },
    ]
    const [showPassword, setShowPassword] = useState(false)

    const router = useRouter()
    return (
        <div className='min-h-[100vh] flex justify-center py-[120px] bg-white'>
            <form onSubmit={onSubmit} className='flex flex-col items-center w-[360px]'>
                <Image
                    src={'/icons/logo.png'}
                    alt='logo'
                    width={33.59}
                    height={32}
                />

                <h3 className='mt-[24px] font-[700] text-[1.875rem] text-center'>{title}</h3>
                <p className='mt-[12px] text-[1rem] font-[500]'>{subtitle}</p>

                <div className='mt-[32px] w-[100%]'>
                    <div className='w-[100%]'>
                        <label htmlFor='email' className='block mb-[6px] text-[0.875rem]'>Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type='email' id="email" placeholder='Enter your email' className='text-[0.9rem] outline-none px-[14px] w-[100%] h-[44px] rounded-[6px] border-[1px] border-[#ABABAB]' />
                    </div>
                    <div className='w-[100%] my-[16px]'>
                        <label htmlFor='password' className='block mb-[6px] text-[0.875rem]'>Password</label>
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

                    {isLogin && <div className='mb-[16px] flex items-center justify-between w-[100%] text-[0.875rem]'>
                        <button
                            type='button'
                            onClick={() => setRememberMe ? setRememberMe(!rememberMe) : null}
                            className='flex items-center gap-[8px]'>
                            <div
                                className={`flex items-center justify-center h-[16px] w-[16px] border-[1px] rounded-[4px] ${rememberMe ? 'border-[#CF0058]' : ''}`}
                            >
                                {rememberMe && <Image
                                    src={'/icons/check.svg'}
                                    alt='check'
                                    width={8}
                                    height={5.5}
                                />}
                            </div>

                            <span>Remember for 30 days</span>
                        </button>


                        <button
                            type='button'

                            onClick={() => router.push('/blogs/forgot-password')}
                            className='text-[#CF0058] font-[700]'>Forgot password</button>

                    </div>}

                    <button
                        disabled={loading}
                        className='mb-[24px] w-[100%] h-[50px] rounded-[30px] bg-[#CF0058] text-white text-[1rem] font-[700] hover:bg-white hover:scale-[0.94] hover:text-[#CF0058] border-[1px] border-[#CF0058] animated-btn'>
                        {loading ?

                            <div className="loader ">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div> : btnLabel}
                    </button>
                </div>

                <div className='flex items-center w-[100%] gap-[12.25px] mb-[24px]'>
                    <hr className='w-[100%]' />
                    <p className='text-[#222] text-[0.8125rem]'>OR</p>
                    <hr className='w-[100%]' />
                </div>

                {/* SOCIALS */}
                {
                    signupOptions.map(({ name, label, icon, textColor, bg }, index) => (
                        <button disabled type='button' key={index} className={`cursor-not-allowed mb-[24px] w-[100%] h-[50px] rounded-[30px]  ${bg} ${textColor} text-[1rem] font-[700] hover:scale-[0.94] border-[1px]  animated-btn flex items-center justify-between px-[47.5px]`}>
                            <Image
                                src={icon}
                                alt={name}
                                width={24}
                                height={24}
                            />

                            <span>{label}</span>

                            <div />
                        </button>
                    ))
                }



                <div className='mt-[32px] flex items-center gap-[4px] justify-center text-[0.875rem] text-[#4E4E4E]'>
                    <p>{footerText}</p>
                    <button
                        type='button'
                        onClick={() => router.push(footerLink)}
                        className='text-[#CF0058] font-[700]'>{footerLinkText}</button>
                </div>

            </form>
        </div>
    )
}

export default Auth