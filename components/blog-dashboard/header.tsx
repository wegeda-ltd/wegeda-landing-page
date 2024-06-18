"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"
import { useEffect } from "react";

interface IHeader {
    title?: string;
    buttons: {
        label: string;
        action: () => void;
        extraClasses?: string
    }[];
    buttonsActive: () => boolean
}

export function Header({ buttons, title, buttonsActive }: IHeader) {
    const router = useRouter()

    let maxWidth = 1620;
    const maxPercentage = 100;


    const handleResize = () => {
        if (typeof window !== "undefined") {
            let dimensions = {
                width: window.innerWidth,
                height: window.innerHeight,
            };

            let zoom =
                dimensions.width > 620 && dimensions.width < maxWidth
                    ? (dimensions.width * maxPercentage) / maxWidth
                    : 100;


            // @ts-ignore

            document.body.style.zoom = zoom + "%";

            dimensions.height = window.innerHeight;
            dimensions.width = window.innerWidth;

            zoom =
                dimensions.width > 620 && dimensions.width < maxWidth
                    ? (dimensions.width * maxPercentage) / maxWidth
                    : 100;

            // @ts-ignore
            document.body.style.zoom = zoom + "%";
        }
    }

    if (typeof window !== "undefined") {
        window.addEventListener("resize", handleResize);
    }

    useEffect(() => {
        handleResize()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>

            <nav className='fixed w-[100%] top-[0] z-[100] px-24 flex items-center justify-between h-[73px] bg-white border-b-[1px]' >

                <div className='flex items-center gap-[40px]'>
                    <Link href={'/blogs/dashboard'} className='mr-[40px]'>
                        <Image
                            src={'/icons/logo.png'}
                            alt='logo'
                            width={32}
                            height={32}
                        />
                    </Link>

                    <h6 className='font-[600] text-[1.4375rem] text-[#222]'>{title}</h6>
                </div>



            </nav>


            <div className='z-[80] bg-white top-[73px] fixed w-[100%] h-[73px] px-24 flex items-center justify-between border-b-[1px]'>
                <button
                    onClick={() => router.back()}
                >
                    <Image
                        src={'/icons/more.svg'}
                        alt='back'
                        width={24}
                        height={24}
                        className='rotate-[-90deg]'
                    />
                </button>

                <div className='flex items-center gap-[12px]'>

                    {buttons.map(({ action, label, extraClasses }, index) => (
                        <button disabled={!buttonsActive()} onClick={action} key={index} className={`${buttonsActive() ? 'opacity-[1]' : 'opacity-[0.5] cursor-not-allowed'} ${extraClasses} text-[0.875rem] font-[600] gap-[4px] flex items-center justify-center  rounded-[30px] h-[40px] px-[30px] animated-btn hover:scale-[0.95]`}>
                            {label}
                        </button>
                    ))}

                </div>
            </div>
        </>

    )
}