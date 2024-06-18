"use client";


import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React, { useEffect, useState } from 'react'

import Image from 'next/image';
import SimilarBlog from '@/components/similar-blog-card';
import { useRouter, useSearchParams } from 'next/navigation';
import DeletePost from '@/components/blog-dashboard/delete-post';

import FooterNewsLetter from '@/components/blog-dashboard/footer-newsletter';
import { Header } from '@/components/blog-dashboard/header';

const socials = [
    { title: 'x.com', icon: '/icons/x.svg' },
    { title: 'facebook', icon: '/icons/fb.svg' },
    { title: 'linkedin', icon: '/icons/lin.svg' },
]


const content = `
<p>Lorem ipsum dolor sit amet consectetur. Tincidunt vulputate fermentum dictum interdum massa. Et molestie elit mauris erat nulla morbi dignissim tempus pretium. Lacus id ornare at rutrum pulvinar neque tristique orci. Sed netus sed neque tristique netus et.</p>
<br/>
<p>Lorem ipsum dolor sit amet consectetur. Commodo sed sagittis rhoncus aliquam neque amet. Lobortis egestas quis dictumst est arcu. Lobortis rhoncus id risus risus libero felis mi id. Amet faucibus morbi magna nibh nulla tristique nunc viverra. Libero eget arcu et diam orci facilisis nam. In augue aliquet viverra neque imperdiet. Massa interdum adipiscing massa ac risus purus. Fusce non id diam tellus at et adipiscing ipsum et. Diam dui nunc volutpat pellentesque. Dictum viverra sit pretium tempus nullam at id. Eget ac in enim ut cursus dolor cras. Egestas et pellentesque est faucibus viverra vitae est proin turpis. Ligula ridiculus mi ultricies vitae consectetur nec lorem maecenas vulputate. Nulla lectus turpis vel eu donec tortor pharetra. Sed mauris arcu pellentesque fringilla. Vitae risus ipsum enim malesuada dolor tincidunt ullamcorper sit. Curabitur blandit volutpat dignissim nam. Proin habitant pharetra varius molestie mi cursus venenatis dolor. A cras at tempor condimentum.</p>
<br/>
<p>Lorem ipsum dolor sit amet consectetur. Commodo sed sagittis rhoncus aliquam neque amet. Lobortis egestas quis dictumst est arcu. Lobortis rhoncus id risus risus libero felis mi id. Amet faucibus morbi magna nibh nulla tristique nunc viverra. Libero eget arcu et diam orci facilisis nam. In augue aliquet viverra neque imperdiet. Massa interdum adipiscing massa ac risus purus. Fusce non id diam tellus at et adipiscing ipsum et. Diam dui nunc volutpat pellentesque. Dictum viverra sit pretium tempus nullam at id. Eget ac in enim ut cursus dolor cras. Egestas et pellentesque est faucibus viverra vitae est proin turpis. Ligula ridiculus mi ultricies vitae consectetur nec lorem maecenas vulputate. Nulla lectus turpis vel eu donec tortor pharetra. Sed mauris arcu pellentesque fringilla. Vitae risus ipsum enim malesuada dolor tincidunt ullamcorper sit. Curabitur blandit volutpat dignissim nam. Proin habitant pharetra varius molestie mi cursus venenatis dolor. A cras at tempor condimentum.</p>
<br/>
<p>Lorem ipsum dolor sit amet consectetur. Tincidunt vulputate fermentum dictum interdum massa. Et molestie elit mauris erat nulla morbi dignissim tempus pretium. Lacus id ornare at rutrum pulvinar neque tristique orci. Sed netus sed neque tristique netus et.</p>

`




function BlogDetail() {
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [dontShow, setDontShow] = useState(false)


    const [blog, setBlog] = useState<any>()
    const [coverImgTempUrl, setCoverImgTempUrl] = useState<any>(null)
    const router = useRouter()
    const typeParams = useSearchParams()
    const [type] = useState(typeParams.get('type'))

    const onDeletePost = () => {
        setShowDeleteModal(false)
    }
    const onCancelDelete = () => {
        setShowDeleteModal(false)
    }

    const onSave = () => {

    }

    const onPublish = () => {

    }

    const buttons = [
        {
            label: 'Save',
            action: onSave,
            extraClasses: 'bg-white border-[1px] border-[#222] text-[#222]',
        },
        {
            label: 'Publish',
            action: onPublish,
            extraClasses: 'bg-[#CF0058] border-[1px] border-[#CF0058] text-white',
        },
    ]


    const previewDp = (image: any) => {
        if (image) {
            const reader = new FileReader()
            reader.onload = (e) => {
                setCoverImgTempUrl(e.target?.result)
            }
            reader.readAsDataURL(image)
        }

    }

    useEffect(() => {

        let blog: any = localStorage.getItem('@wegeda-preview')

        if (blog) {

            if (blog?.coverImage) {
                previewDp(blog.coverImage)
            }
            setBlog(JSON.parse(blog))
        }
    }, [])

    const buttonsActive: () => boolean = () => {
        return (blog && blog?.title.length && blog?.category?.label?.length && blog?.content.length && blog?.coverImage)
    }

    return (
        <div className="min-h-[100vh] relative sm:mt-[193px]">
            {type === 'preview' ? <Header title='New post' buttons={buttons} buttonsActive={buttonsActive} /> : <Navbar />}
            {type === 'user' && <div className='z-[80] bg-white top-[120px] fixed w-[100%] h-[73px] px-24 flex items-center justify-between border-b-[1px]'>
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

                <div className='flex items-center gap-[16px]'>
                    <button onClick={() => setShowDeleteModal(true)} className='animated-btn hover:scale-[0.95]'>
                        <Image
                            src={'/icons/delete.svg'}
                            alt='delete'
                            width={24}
                            height={24}
                        />
                    </button>

                    <button className='text-[0.875rem] font-[600] gap-[4px] flex items-center justify-center border-[1px] border-[#222] rounded-[30px] h-[40px] w-[114px] animated-btn hover:scale-[0.95]'>
                        <Image
                            src={'/icons/edit.svg'}
                            alt='edit'
                            width={24}
                            height={24}
                        />
                        Edit
                    </button>

                </div>
            </div>}
            <div className='p-24 pt-[24px]'>

                <header>
                    <h6 className='font-[600] text-[0.9375rem] text-[#7C7C7C] mb-[12px]'>{type === 'preview' ? blog?.category?.label : 'Product Updates'} <span className='text-[#000]'>13 Feb 2024</span></h6>
                    <h2 className='font-[700] text-[3rem] w-[90%] mb-[24px] leading-[60px]'>{type === 'preview' ? blog?.title : "10 Ways to find your perfect roommate match in Lagos"} </h2>

                    <div className='flex items-center justify-between font-[600] text-[1.125rem]'>
                        <p className='text-[#A60046]'>{type === 'preview' ? blog?.category?.label : 'Product Updates'}</p>

                        <div className='flex items-center gap-[40px]'>
                            <p className='underline'>Lukman Bello</p>
                            <p>Last updated 14 Feb 2024</p>

                        </div>
                    </div>


                </header>

                <main className='py-[40px] px-[24px]'>

                    <div className='flex items-center gap-[32px] mb-[40px]'>
                        <div className='flex flex-col gap-[12px]'>
                            {
                                socials.map((social, index) => (
                                    <button key={index} className='social-share h-[40px] w-[40px] flex items-center justify-center rounded-[8px] border-[1px]'>
                                        <Image
                                            src={social.icon}
                                            alt={social.title}
                                            height={20}
                                            width={20}
                                        />
                                    </button>
                                ))
                            }
                        </div>
                        <Image
                            src={type === 'preview' && coverImgTempUrl ? coverImgTempUrl : '/images/blog-details-img.png'}
                            alt='cover'
                            width={1160}
                            height={600}
                            className='w-[100%] h-auto'
                        />
                    </div>

                    <div className='pl-[72px] pb-[100px]'>

                        <div
                            className='text-[1.25rem] quill'
                            dangerouslySetInnerHTML={{
                                __html: type === "preview" ? blog?.content : content
                            }}
                        />
                    </div>

                    {type !== 'preview' && <>
                        <div>
                            <div
                                className='mb-[24px] flex items-center justify-between font-[600]'
                            >

                                <h4 className='text-[1.4375rem]'>0 comments</h4>
                                <div className='flex items-center gap-[8px] text-[1rem]'>
                                    <span>Latest</span>
                                    <Image
                                        src={'/icons/sort.svg'}
                                        alt='sort'
                                        width={20}
                                        height={20}
                                    />
                                </div>
                            </div>

                            <div className='flex items-center gap-[32px]'>
                                <Image
                                    src={'/icons/commenter-avatar.svg'}
                                    alt='avatar'
                                    width={64}
                                    height={64}

                                />

                                <textarea
                                    className='w-[100%] h-[64] border-[1px]'
                                    placeholder='Add a comment...'
                                />
                            </div>
                        </div>


                        {/* MORE BY AUTHOR */}

                        <div className='my-[100px]'>

                            <div className='flex items-center justify-between mb-[64px]'>
                                <h3 className='text-[2.25rem] font-[700]'>More by this Author</h3>

                                <span className='cursor-pointer text-[1rem] font-[600] text-[#CF0058] hover:text-[#A60048] see-all'>See all</span>

                            </div>
                            <div className='grid grid-cols-3 gap-[32px]'>
                                {[0, 0, 0].map((_, index) => (
                                    <SimilarBlog key={index} />
                                ))}
                            </div>
                        </div>




                        <FooterNewsLetter />
                    </>}
                </main>
            </div>

            <Footer />

            {showDeleteModal && <DeletePost onCancel={onCancelDelete} onDelete={onDeletePost} setDontShow={setDontShow} dontShow={dontShow} />}
        </div>
    )
}

export default BlogDetail