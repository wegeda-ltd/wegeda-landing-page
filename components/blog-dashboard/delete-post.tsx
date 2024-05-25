import Image from 'next/image'
import React from 'react'

interface IDeletePost {
    onDelete: () => void;
    onCancel: () => void;
    setDontShow: (v: boolean) => void;
    dontShow: boolean
}
function DeletePost({ onCancel, onDelete, setDontShow, dontShow }: IDeletePost) {
    return (
        <div className='flex items-center justify-center bg-[#101828B2] bg-clip-padding backdrop-filter backdrop-blur bg-opacity-20 fixed min-h-[100vh] h-[100%] w-[100%] top-[0] z-[10000000000]'>
            <div className='bg-white drop-shadow-md rounded-[12px] p-[24px] w-[544px]'>
                <div className='flex items-start gap-[24px]'>
                    <Image
                        src={'/icons/warning.svg'}
                        height={48}
                        width={48}
                        alt='warning'
                    />

                    <div >
                        <h4 className='text-[18px] font-[700] mb-[8px]'>Delete blog post</h4>
                        <p className='font-[500] text-[0.875rem] text-[#222]'>Are you sure you want to delete this post? This action cannot be undone.</p>

                        <div className='mt-[32px] flex items-center justify-between'>

                            <button className='flex items-center gap-[8px]'
                                onClick={() => setDontShow(!dontShow)}
                            >
                                <div className={`w-[16px] h-[16px] border-[1px] rounded-[4px] flex items-center justify-center ${dontShow ? 'border-[#CF0058]' : 'border-[#D0D5DD]'}`}>
                                    {dontShow && <Image
                                        src={'/icons/check.svg'}
                                        alt='check'
                                        width={8}
                                        height={5.5}
                                    />}
                                </div>

                                <span className='text-[#4E4E4E] text-[0.875rem] font-[600]'>Don’t show again</span>
                            </button>

                            <div className='flex items-center gap-[12px] text-[0.875rem] font-[600]'>
                                <button onClick={onCancel} className='hover:scale-[0.9] animated-btn h-[40px] border-[1px] border-[#222] w-[105px] rounded-[30px] bg-white text-[#222]'>
                                    Cancel
                                </button>

                                <button onClick={onDelete} className='hover:scale-[0.9] animated-btn h-[40px] w-[105px] rounded-[30px] bg-[#E03616] text-white border-[1px] border-[#E03616]'>
                                    Delete
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletePost