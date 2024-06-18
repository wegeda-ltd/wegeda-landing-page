"use client";

import Auth from '@/components/auth'
import axiosInstance from '@/helpers/axios-instance';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'
import { toast } from 'react-toastify';

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            setLoading(true)
            const resp = await axiosInstance.post('/auth/register', {
                email,
                password
            })

            if (typeof window != 'undefined') {
                localStorage.setItem('@wegeda-token', resp.data.data.token)
            }
            toast.success(resp.data.message)

            router.push('/blogs/onboarding')

            setLoading(false)
        } catch (error: any) {
            setLoading(false)
            if (error?.response?.data) {
                toast.error(error?.response?.data.errors[0].message)
            } else {
                toast.error("An Error Occurred")
            }
        }
    }

    return (
        <Auth
            title='Create an account'
            subtitle='Become a Wegeda blogger today!'
            onSubmit={onSubmit}
            email={email}
            loading={loading}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            footerLink={'/blogs/login'}
            footerLinkText='Log in'
            footerText='Already have an account?'
            btnLabel={'Get started'}
        />
    )
}

export default Register