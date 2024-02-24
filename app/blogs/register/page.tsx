"use client";

import Auth from '@/components/auth'
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push('/blogs/onboarding')
    }

    return (
        <Auth
            title='Create an account'
            subtitle='Become a Wegeda blogger today!'
            onSubmit={onSubmit}
            email={email}
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