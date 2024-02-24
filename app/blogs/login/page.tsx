"use client";

import Auth from '@/components/auth'
import React, { FormEvent, useState } from 'react'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <Auth
            title={"Log in"}
            subtitle='Welcome back! Continue to your dashboard'
            onSubmit={onSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            footerLink={"/blogs/register"}
            footerLinkText={"Sign up"}
            footerText="Don't have an account?"
            btnLabel={"Continue"}
            isLogin={true}
            rememberMe={rememberMe}
            setRememberMe={setRememberMe}
        />
    )
}

export default Login