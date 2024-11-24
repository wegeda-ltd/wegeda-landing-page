"use client";
import React, { FormEvent, useEffect, useState } from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify';
import axiosInstance from '@/helpers/axios-instance';
import { useRouter, useSearchParams } from 'next/navigation';

function DeleteAccount() {
    const [sending, setSending] = useState(false)
    const [deleting, setDeleting] = useState(false)
    const [email, setEmail] = useState('')
    const [id, setId] = useState<string | null>()
    const [code, setCode] = useState<string | null>()
    const params = useSearchParams();

    const router = useRouter()



    const initiateDeleteAccount = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            setSending(true)

            const resp = await axiosInstance.post('/users/initiate-deletion', {
                email
            })

            toast.success(resp.data.message)
            setEmail('')
            setSending(false)

        } catch (error: any) {
            setSending(false)
            toast.error(error.response?.data?.errors[0].message || "An Error Occurred")
        }
    }

    const deleteAccount = async () => {
        if (code && id) {
            try {
                setDeleting(true)

                const resp = await axiosInstance.delete(`/users?id=${id}&otp=${code}`)

                toast.success(resp.data.message)
                setDeleting(false)
                router.push('/')
            } catch (error: any) {
                setId(null)
                setCode(null)
                setDeleting(false)
                toast.error(error.response?.data?.errors[0].message || "An Error Occurred")
            }
        }
    }

    useEffect(() => {
        setId(prev => params.get('id'))
        setCode(prev => params.get('code'))
        setDeleting(prev => true)

    }, [params])

    useEffect(() => {
        deleteAccount()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, code])
    return (
        <div className='flex flex-col items-center justify-center h-[100vh]'>
            {id && code && deleting ? <div className='flex items-center deleting'>
                <h3 className='font-bold text-[#CF0058]'>Please wait</h3>
                <div className="loader ">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div> : id && code && !deleting ? <div className='flex items-center deleting'>
                <h3 className='font-bold text-[#CF0058]'>Redirecting</h3>
                <div className="loader ">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div> :
                <form
                    onSubmit={(e) => initiateDeleteAccount(e)}
                    className="bg-white shadow-sm w-[334px] rounded-[8px] max-h-[310px] overflow-hidden show-chat-form">
                    <div className="show-chat-cont ">
                        <div className="bg-[#CF0058] p-4 text-white">
                            <div className="flex items-center justify-between ">
                                <Image
                                    src="/icons/logo-white.svg"
                                    alt="logo"
                                    width={25.19}
                                    height={24}
                                />
                                <Image
                                    src="/icons/users.png"
                                    alt="logo"
                                    width={80}
                                    height={32}
                                />
                            </div>

                            <h6 className="text-[1.125rem] font-[700] mt-[32px]">Hey There 👋 </h6>
                            <p className="text-[0.75rem]">Enter your email to get a link to delete your account</p>
                        </div>
                        <div
                            className="p-4 border-x-[1px] rounded-b-[8px]"
                        >
                            <div className="form-group flex-1 mt-6 border-[1px]">
                                <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" type="email" required />
                                <label htmlFor="email">Email</label>
                            </div>
                            {/* <div className="form-group flex-1 mt-6 border-[1px]">
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} id="tel" name="tel" type="tel" required />
                            <label htmlFor="tel">Mobile Phone</label>
                        </div>

                        <div className="form-group flex-1 mt-6 border-[1px]" >
                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" id="message" className="h-[120px]" required />
                            <label htmlFor="message" className="!top-[20%]">Message</label>
                        </div> */}


                            <div className="flex justify-end mt-4">
                                <button
                                    disabled={sending}
                                    type="submit" className="flex items-center justify-center animated-btn rounded-[4px] bg-[#CF0058] h-[40px] w-[153px] text-white border-[1px] border-[#CF0058] hover:text-[#CF0058] hover:bg-white text-[0.75rem] font-[600]">
                                    {sending ? 'Sending' : 'Send Mail'}

                                    {sending &&

                                        <div className="loader ">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    }

                                </button>
                            </div>

                        </div>
                    </div>
                </form>}
        </div>
    )
}

export default DeleteAccount