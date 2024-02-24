"use client";

import Image from 'next/image';
import React, { FormEvent, useEffect, useRef, useState } from 'react'

function Onboarding() {
    const [currentTab, setCurrentTab] = useState(0)
    const [fullName, setFullName] = useState('')
    const [twitter, setTwitter] = useState('')
    const [instagram, setInstagram] = useState('')
    const [facebook, setFacebook] = useState('')
    const [dp, setDp] = useState<File | null>(null)
    const [tempDp, setTempDp] = useState<any>('/icons/upload-placeholder.svg')

    const imagePickerRef = useRef<HTMLInputElement>(null)

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (currentTab < 2) {
            setCurrentTab(prev => prev + 1)
        }
    }

    const previewDp = () => {

        if (dp) {
            const reader = new FileReader()
            reader.onload = (e) => {
                setTempDp(e.target?.result)



            }
            reader.readAsDataURL(dp)
        }



    }

    useEffect(() => {
        previewDp()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dp])
    return (
        <div className='min-h-[100vh] flex justify-center py-[56px] bg-white'>

            <div className='w-[360px]'>
                {/* INDICATORS */}
                <div className='flex items-center gap-[8px] h-[2px] w-[100%] mb-[40px]'>
                    {[0, 0, 0].map((_, index) => (
                        <div key={index} className={`w-[100%] h-[2px] ${currentTab >= index ? 'step-indicator' : 'bg-[#EDEEF1]'} ${currentTab === index ? 'onboarding' : ''} `} />
                    ))}
                </div>


                {currentTab === 0 ? <form onSubmit={onSubmit} className='py-[48px]'>
                    <h3 className='text-[1.875rem] font-[700] mb-[32px]'>Tell us about yourself</h3>

                    <div className='w-[100%] mb-[16px]'>
                        <label htmlFor='fullName' className='block mb-[6px] text-[0.875rem]'>Full name</label>
                        <input value={fullName} onChange={e => setFullName(e.target.value)} id="fullName" placeholder='Enter your full name' className='text-[0.9rem] outline-none px-[14px] w-[100%] h-[44px] rounded-[8px] border-[1px] !border-[#ABABAB]' required />
                    </div>
                    <div className='w-[100%] mb-[16px]'>
                        <label htmlFor='bio' className='block mb-[6px] text-[0.875rem]'>Bio</label>
                        <textarea
                            id='bio'
                            placeholder='Bio'
                            required
                            className='text-[0.9rem] outline-none px-[14px] w-[100%] h-[120px] rounded-[8px] border-[1px] border-[#ABABAB]'
                        />
                    </div>

                    <button className='animated-btn hover:bg-white hover:text-[#CF0058] border-[1px] border-[#CF0058] bg-[#CF0058] text-white text-[0.75rem] h-[50px] w-[153px] rounded-[30px] '>
                        NEXT
                    </button>
                </form> :
                    currentTab === 1 ?
                        <form onSubmit={onSubmit} className='py-[48px]'>
                            <h3 className='text-[1.875rem] font-[700] mb-[32px]'>Connect your socials</h3>

                            <div className='w-[100%] mb-[16px]'>
                                <label htmlFor='twitter' className='block mb-[6px] text-[0.875rem]'>Twitter handle</label>
                                <div className='flex items-center text-[0.9rem]  px-[14px] w-[100%] h-[44px] rounded-[8px] overflow-hidden border-[1px] !border-[#ABABAB]'>
                                    <span className='text-[#667085]'>https://x.com/</span>

                                    <input value={twitter} onChange={e => setTwitter(e.target.value)} id="twitter" className='outline-none w-[100%] h-[44px]' />

                                </div>
                            </div>

                            {/* Instagram */}
                            <div className='w-[100%] mb-[16px]'>
                                <label htmlFor='instagram' className='block mb-[6px] text-[0.875rem]'>Instagram handle</label>
                                <div className='flex items-center text-[0.9rem]  px-[14px] w-[100%] h-[44px] rounded-[8px] overflow-hidden border-[1px] !border-[#ABABAB]'>
                                    <span className='text-[#667085]'>https://instagram.com/</span>

                                    <input value={instagram} onChange={e => setInstagram(e.target.value)} id="instagram" className='outline-none w-[100%] h-[44px]' />

                                </div>
                            </div>

                            <div className='w-[100%] mb-[16px]'>
                                <label htmlFor='facebook' className='block mb-[6px] text-[0.875rem]'>Facebook handle</label>
                                <div className='flex items-center text-[0.9rem]  px-[14px] w-[100%] h-[44px] rounded-[8px] overflow-hidden border-[1px] !border-[#ABABAB]'>
                                    <span className='text-[#667085]'>https://facebook.com/</span>

                                    <input value={facebook} onChange={e => setFacebook(e.target.value)} id="facebook" className='outline-none w-[100%] h-[44px]' />

                                </div>
                            </div>


                            <button className='animated-btn hover:bg-white hover:text-[#CF0058] border-[1px] border-[#CF0058] bg-[#CF0058] text-white text-[0.75rem] h-[50px] w-[153px] rounded-[30px] '>
                                NEXT
                            </button>
                        </form> :
                        <form onSubmit={onSubmit} className='py-[48px]'>
                            <h3 className='text-[1.875rem] font-[700]  text-center'>Upload your photo</h3>
                            <p className='text-center mt-[12px] text-[#222] font-[500] mb-[32px]'>Tap image to upload (optional)</p>

                            <div className='flex justify-center mb-[32px]'>
                                <input
                                    type='file'
                                    accept='image/*'
                                    ref={imagePickerRef}
                                    className='hidden'
                                    onChange={(e) => setDp(e.target.files ? e.target.files[0] : null)}
                                />

                                <button
                                    onClick={() => imagePickerRef.current?.click()}
                                    type='button'
                                    className=''
                                >


                                    <Image
                                        src={tempDp}
                                        alt='upload'
                                        width={200}
                                        height={200}
                                        className='h-[200px] w-[200px] rounded-[200px] object-cover'
                                    />
                                </button>
                            </div>

                            <button className='animated-btn hover:bg-white hover:text-[#CF0058] border-[1px] border-[#CF0058] bg-[#CF0058] text-white text-[0.75rem] h-[50px] w-[100%] rounded-[30px] '>
                                NEXT
                            </button>
                        </form>
                }
            </div>
        </div>
    )
}

export default Onboarding