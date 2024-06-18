"use client";

import BlogDashboardNav from '@/components/blog-dashboard/navbar'
import Image from 'next/image'
import React, { useState } from 'react'

interface IActionBtns {
    onCancel: (type: 'personal' | 'social' | 'password') => void;
    onConfirm: (type: 'personal' | 'social' | 'password') => void;
    type: 'personal' | 'social' | 'password';
}
function ActionButtons({ onCancel, onConfirm }: IActionBtns) {
    return (
        <div className='flex justify-end mt-[32px] gap-[12px] border-t-[1px] border-t-[#EDEEF1] pt-[16px]' >
            <button onClick={() => onCancel('personal')} className={`bg-white border-[1px] border-[#222] text-[#222] text-[0.875rem] font-[600] gap-[4px] flex items-center justify-center  rounded-[30px] h-[40px] px-[30px] animated-btn hover:scale-[0.95]`}>
                Cancel
            </button>
            <button onClick={() => onConfirm('personal')} className={`bg-[#CF0058] border-[1px] border-[#CF0058] text-white text-[0.875rem] font-[600] gap-[4px] flex items-center justify-center  rounded-[30px] h-[40px] px-[30px] animated-btn hover:scale-[0.95]`}>
                Save changes
            </button>
        </div>
    )
}
function EditProfile() {
    const [fullName, setFullName] = useState('James Oko')
    const [email, setEmail] = useState('james.oko@gmail.com')
    const [bio, setBio] = useState(' I write blogs for fun.')
    const [instagram, setInstagram] = useState('jamesoko')
    const [facebook, setFacebook] = useState('jamesoko')
    const [twitter, setTwitter] = useState('jamesoko')
    const [oldPassword, setOldPassword] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showOldPassword, setShowOldPassword] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const onCancel = (type: 'personal' | 'social' | 'password') => {

    }

    const onConfirm = (type: 'personal' | 'social' | 'password') => {

    }
    return (
        <div>
            <BlogDashboardNav />
            <div className='mt-[73px] py-[48px] flex justify-center px-24'>
                <div className='w-[640px]'>
                    {/* Personal Info */}
                    <div>

                        <h3 className='font-[700] text-[1.25rem] mb-[4px]'>Personal info</h3>
                        <h5 className='text-[0.875rem] font-[500] text-[#7C7C7C] mb-[25px]'>Update your photo and personal details here.</h5>

                        <form className='my-[32px] p-[24px] bg-white drop-shadow-md rounded-[12px]' >

                            <div>
                                <Image
                                    src={'/images/man-pressing-phone.png'}
                                    alt='dp'
                                    width={64}
                                    height={64}
                                    className='min-h-[64px] min-w-[64px] w-[64px] h-[64px] rounded-full object-cover '
                                />
                            </div>
                            <div className='w-[100%] mb-[16px] mt-[24px]'>
                                <label htmlFor='fullName' className='block mb-[6px] text-[0.875rem]'>Full name</label>
                                <input value={fullName} onChange={e => setFullName(e.target.value)} id="fullName" placeholder='Enter your full name' className='text-[0.9rem] outline-none px-[14px] w-[100%] h-[44px] rounded-[8px] border-[1px] !border-[#ABABAB]' required />
                            </div>
                            <div className='w-[100%] mb-[16px] '>
                                <label htmlFor='email' className='block mb-[6px] text-[0.875rem]'>Email</label>
                                <div className='gap-[14px] flex items-center text-[0.9rem] outline-none px-[14px] w-[100%] h-[44px] rounded-[6px] border-[1px] border-[#ABABAB]'>
                                    <Image
                                        src={'/icons/email.svg'}
                                        alt='mail'
                                        width={20}
                                        height={20}
                                    />

                                    <input value={email} type='email' onChange={e => setEmail(e.target.value)} id="email" placeholder='Enter your email'
                                        className='outline-none w-[100%]'
                                        required />



                                </div>

                            </div>
                            <div className='w-[100%] mb-[16px]'>
                                <label htmlFor='bio' className='block mb-[6px] text-[0.875rem]'>Bio</label>
                                <textarea
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    id='bio'
                                    placeholder='Bio'
                                    required
                                    className='text-[0.9rem] outline-none px-[14px] w-[100%] h-[120px] rounded-[8px] border-[1px] border-[#ABABAB]'
                                />
                            </div>

                            <ActionButtons
                                onCancel={onCancel}
                                onConfirm={onConfirm}
                                type='personal'
                            />
                        </form>
                    </div>



                    {/* Social Info */}
                    <div className='my-[32px]'>
                        <h3 className='font-[700] text-[1.25rem] mb-[4px]'>Social info</h3>
                        <h5 className='text-[0.875rem] font-[500] text-[#7C7C7C] mb-[25px]'>Update your social information.</h5>


                        <form className=' p-[24px] bg-white drop-shadow-md rounded-[12px]' >

                            <div className='w-[100%] mb-[16px] mt-[24px]'>
                                <label htmlFor='instagram' className='block mb-[6px] text-[0.875rem]'>Instagram</label>

                                <div className='flex items-center text-[0.9rem]  px-[14px] w-[100%] h-[44px] rounded-[8px] overflow-hidden border-[1px] !border-[#ABABAB]'>
                                    <span className='text-[#667085]'>https://instagram.com/</span>

                                    <input value={instagram} onChange={e => setInstagram(e.target.value)} id="instagram" className='outline-none w-[100%] h-[44px]' />

                                </div>
                            </div>

                            <div className='w-[100%] mb-[16px]'>
                                <label htmlFor='facebook' className='block mb-[6px] text-[0.875rem]'>Facebook</label>

                                <div className='flex items-center text-[0.9rem]  px-[14px] w-[100%] h-[44px] rounded-[8px] overflow-hidden border-[1px] !border-[#ABABAB]'>
                                    <span className='text-[#667085]'>https://facebook.com/</span>

                                    <input value={facebook} onChange={e => setFacebook(e.target.value)} id="facebook" className='outline-none w-[100%] h-[44px]' />

                                </div>
                            </div>

                            <div className='w-[100%] mb-[16px]'>
                                <label htmlFor='twitter' className='block mb-[6px] text-[0.875rem]'>Instagram</label>

                                <div className='flex items-center text-[0.9rem]  px-[14px] w-[100%] h-[44px] rounded-[8px] overflow-hidden border-[1px] !border-[#ABABAB]'>
                                    <span className='text-[#667085]'>https://twitter.com/</span>

                                    <input value={twitter} onChange={e => setTwitter(e.target.value)} id="twitter" className='outline-none w-[100%] h-[44px]' />

                                </div>
                            </div>

                            <ActionButtons
                                onCancel={onCancel}
                                onConfirm={onConfirm}
                                type='social'
                            />
                        </form>
                    </div>

                    {/* PASSWORD */}
                    <div className='my-[32px]'>
                        <h3 className='font-[700] text-[1.25rem] mb-[4px]'>Password</h3>
                        <h5 className='text-[0.875rem] font-[500] text-[#7C7C7C] mb-[25px]'>Update your password.</h5>


                        <form className=' p-[24px] bg-white drop-shadow-md rounded-[12px]' >

                            <div className='w-[100%] mt-[16px]'>
                                <label htmlFor='old-password' className='block mb-[6px] text-[0.875rem]'>Old Password</label>
                                <div className='gap-[14px] flex items-center text-[0.9rem] outline-none px-[14px] w-[100%] h-[44px] rounded-[6px] border-[1px] border-[#ABABAB]'>
                                    <input value={oldPassword} onChange={e => setOldPassword(e.target.value)} type={showPassword ? 'text' : 'password'} id="old-password" placeholder='Old Password' className='outline-none w-[100%]' />
                                    <button
                                        type='button'
                                        onClick={() => setShowOldPassword(prev => !prev)}
                                    >
                                        <Image
                                            src={'/icons/hide-password.svg'}
                                            alt='hide'
                                            width={16}
                                            height={16}
                                            className={`${showOldPassword ? 'rotate-[180deg]' : ''}`}
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className='w-[100%] my-[16px]'>
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
                            <div className='w-[100%]'>
                                <label htmlFor='confirm-password' className='block mb-[6px] text-[0.875rem]'>Confirm Password</label>
                                <div className='gap-[14px] flex items-center text-[0.9rem] outline-none px-[14px] w-[100%] h-[44px] rounded-[6px] border-[1px] border-[#ABABAB]'>
                                    <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type={showPassword ? 'text' : 'password'} id="confirm-password" placeholder='Password' className='outline-none w-[100%]' />
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

                            <ActionButtons
                                onCancel={onCancel}
                                onConfirm={onConfirm}
                                type='password'
                            />
                        </form>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default EditProfile