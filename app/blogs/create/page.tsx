// "use client";

// import React, { Suspense, useEffect, useRef, useState } from 'react'
// import Image from 'next/image'
// import { useRouter } from 'next/navigation'
// import Select from 'react-select';
// import Editor from '@/components/editor';
// import { generateUUID } from '@/utils/format';
// import ConfirmationModal from '@/components/blog-dashboard/confirmation-modal';
// import { Header } from '@/components/blog-dashboard/header';


// function Create() {
//     const [dragging, setDragging] = useState(false);
//     const router = useRouter()
//     const [content, setContent] = useState('')
//     const [title, setTitle] = useState('')
//     const [category, setCategory] = useState<any>(null)
//     const [coverImage, setCoverImage] = useState<File | null>(null)
//     const [coverImgTempUrl, setCoverImgTempUrl] = useState<any>('')
//     const [showSaveModal, setShowSaveModal] = useState(false)
//     const [showPublishModal, setShowPublishModal] = useState(false)
//     const imagePickerRef = useRef<HTMLInputElement>(null)





//     const onSave = () => {
//         setShowSaveModal(false)
//     }

//     const onPreview = () => {

//         const data = {
//             id: generateUUID(),
//             content,
//             // cover_image: coverImgTempUrl,
//             cover_image: coverImage,
//             title,
//             category,
//             createdAt: new Date().toISOString()

//         }

//         localStorage.setItem('@wegeda-preview', JSON.stringify(data));

//         router.push(`/blogs/${data.id}?type=preview`)

//     }

//     const onPublish = () => {
//         const data = {
//             content,
//             cover_image: coverImgTempUrl,
//             coverImage,
//             title,
//             category

//         }

//         setShowPublishModal(false)
//         // localStorage.setItem('p')

//     }
//     const buttons = [
//         {
//             label: 'Save',
//             action: () => setShowSaveModal(true),
//             extraClasses: 'bg-white border-[1px] border-[#222] text-[#222]',
//         },
//         {
//             label: 'Preview',
//             action: onPreview,
//             extraClasses: 'bg-[#4392F1] border-[1px] border-[#4392F1] text-white',
//         },
//         {
//             label: 'Publish',
//             action: () => setShowPublishModal(true),
//             extraClasses: 'bg-[#CF0058] border-[1px] border-[#CF0058] text-white',
//         },
//     ]

//     const categories = [
//         {
//             value: 'tips-for-roommates',
//             label: 'Tips for roommates'
//         },
//         {
//             value: 'tips-for-landlords',
//             label: 'Tips for landlords'
//         },
//         {
//             value: 'neighbourhood-spotlights',
//             label: 'Neighbourhood spotlights'
//         },
//         {
//             value: 'roommates-success-stories',
//             label: 'Roommates success stories'
//         },
//     ];

//     // IMAGE
//     const previewDp = (image: any) => {
//         if (image) {
//             const reader = new FileReader()
//             reader.onload = (e) => {
//                 setCoverImgTempUrl(e.target?.result)
//             }
//             reader.readAsDataURL(image)
//         }

//     }
//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setCoverImage(e.target.files ? e.target.files[0] : null)
//         previewDp(e.target.files![0])
//     }


//     const handleDragOver = (e: any) => {
//         e.preventDefault();
//         setDragging(true);
//     };

//     const handleDragEnter = (e: any) => {
//         e.preventDefault();
//         setDragging(true);
//     };

//     const handleDragLeave = (e: any) => {
//         e.preventDefault();
//         setDragging(false);
//     };

//     const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
//         e.preventDefault();
//         setDragging(false);
//         const file = e.dataTransfer.files[0];
//         setCoverImage(file)
//         previewDp(file)
//     };


//     const buttonsActive: () => boolean = () => {
//         return (title.length && category?.label?.length && content.length && coverImage)
//     }

//     return (

//         <div className='flex flex-col'>
//             <Suspense fallback={<div></div>}>
//                 <Header buttons={buttons} buttonsActive={buttonsActive} />
//             </Suspense>


//             <form className='mt-[146px] px-24 py-[48px] bg-white sm:w-[1280px] max-w-[1280px] self-center' >
//                 <div className='flex items-center w-[100%] gap-[32px]'>
//                     <div className='flex-[1]'>
//                         <label htmlFor='title' className='font-[600] block mb-[8px] text-[0.875rem] text-[#7C7C7C]'>Title</label>
//                         <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Blog Title' id='title' className='px-[14px] h-[56px] rounded-[8px] border-[#DDD] w-[100%] focus:outline-none border-[1px]' />
//                     </div>
//                     <div className='flex-[1]'>
//                         <label htmlFor='category' className='font-[600] block mb-[8px] text-[0.875rem] text-[#7C7C7C]'>Category</label>
//                         <Select
//                             value={category}
//                             onChange={(v) => setCategory(v)}
//                             options={categories}
//                             placeholder={'Select category'}
//                             className='!focus:outline-none  !h-[56px] !rounded-[8px] !border-[#DDD] !w-[100%] !border-[1px]'
//                             classNames={({
//                                 control: (baseStyles) => '!focus:outline-none hover:border-[0px]',
//                             })}
//                             styles={{
//                                 placeholder: (baseStyles) => ({
//                                     ...baseStyles,
//                                     color: '#a7a7a7'
//                                 }),
//                                 control: (baseStyles) => ({
//                                     ...baseStyles,
//                                     height: '100%',
//                                     border: '0px',
//                                     borderRadius: '8px',
//                                     paddingRight: '14px',
//                                     paddingLeft: '14px'
//                                 }),
//                                 indicatorSeparator: (baseStyles) => ({
//                                     ...baseStyles,
//                                     backgroundColor: 'transparent'
//                                 }),

//                             }}
//                         />
//                     </div>
//                 </div>

//                 <div className='mt-[32px]'>
//                     <label htmlFor='content' className='font-[600] block mb-[8px] text-[0.875rem] text-[#7C7C7C]'>Content</label>
//                     <Editor content={content} setContent={setContent} />

//                 </div>


//                 <div className='mt-[32px]'>
//                     <label htmlFor='cover' className='font-[600] block mb-[8px] text-[0.875rem] text-[#7C7C7C]'>Cover</label>
//                     {coverImage && coverImgTempUrl ?
//                         <div className='relative p-[10px] rounded-[8px]'>

//                             <Image
//                                 src={coverImgTempUrl}
//                                 width={1000}
//                                 height={500}
//                                 className='min-w-[100%] w-[100%] h-[500px] rounded-[8px] border-[1px] border-[#DDD]'
//                                 alt='upload'

//                             />

//                             <button
//                                 onClick={() => {
//                                     setCoverImage(null)
//                                     setCoverImgTempUrl('')
//                                 }}
//                                 className='active:scale-[0.95] animated-btn active:bg-[#e6e6e6] bg-[#F2F4F7] border-[4.8px] border-[#F9FAFB] text-[1rem] text-[#000] w-[32px] h-[32px] rounded-[32px] flex items-center justify-center absolute right-[0px] top-[0px]'>
//                                 x
//                             </button>
//                         </div> :
//                         <div onDragOver={handleDragOver}
//                             onDragEnter={handleDragEnter}
//                             onDragLeave={handleDragLeave}
//                             onDrop={handleDrop}

//                             className={`text-[#505050] flex flex-col items-center px-[24px] py-[32px] rounded-[8px] bg-white  ${dragging ? 'border-[2px] !border-[#4392F1]' : 'border-[1px] border-[#DDD]'}`}>
//                             <Image
//                                 src={'/icons/upload.svg'}
//                                 alt='upload'
//                                 height={40}
//                                 width={40}
//                             />
//                             <input
//                                 type='file'
//                                 accept='image/*'
//                                 ref={imagePickerRef}
//                                 className='hidden'
//                                 onChange={handleInputChange}
//                             />
//                             <p className='mt-[12px] text-[0.875rem] text-center'><span className='cursor-pointer font-[600] text-[#A60046]'
//                                 onClick={() => imagePickerRef.current?.click()}

//                             >Click to upload</span> or drag and drop</p>
//                             <p className='text-[0.75rem] font-[500] mt-[4px] text-center'>SVG, PNG, JPG or GIF</p>
//                         </div>
//                     }
//                 </div>
//             </form>

//             {showSaveModal && <ConfirmationModal onCancel={() => setShowSaveModal(false)} onConfirm={onSave} title='Save post' subtitle='You are about to save a post. You can publish it later from your draft' icon='/icons/save-icon.svg' />}
//             {showPublishModal && <ConfirmationModal onCancel={() => setShowPublishModal(false)} onConfirm={onPublish} title='Publish blog post' subtitle='You are about to publish a post. You will be able to edit this post and republish changes.' icon='/icons/publish-icon.svg' />}
//         </div>
//     )
// }

// export default Create


import React from 'react'

function Create() {
    return (
        <div>Create</div>
    )
}

export default Create