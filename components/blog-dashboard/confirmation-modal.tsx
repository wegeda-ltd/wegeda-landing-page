import Image from 'next/image'
import React from 'react'

interface IConfirmationModal {
    title: string;
    subtitle?: string;
    onCancel: () => void;
    onConfirm: () => void;
    icon: string;
}
function ConfirmationModal({ title, subtitle, onCancel, onConfirm, icon }: IConfirmationModal) {
    return (
        <div className='fixed w-[100%] min-h-[100vh] bg-[#101828B2] z-[10000000] h-[100%] flex items-center justify-center'>
            <div className='bg-white rounded-[12px] w-[544px] min-h-[196px] p-[24px] flex gap-[24px] items-start'>
                <Image
                    src={icon}
                    alt='publish'
                    width={48}
                    height={48}
                />

                <div>
                    <h5 className='text-[1.25rem] font-[700] mb-[8px]'>{title}</h5>
                    <p className='font-[500] text-[0.875rem] text-[#222] leading-[20px]'>{subtitle}</p>

                    <div className='flex justify-end mt-[32px] gap-[12px]' >
                        <button onClick={onCancel} className={`bg-white border-[1px] border-[#222] text-[#222] text-[0.875rem] font-[600] gap-[4px] flex items-center justify-center  rounded-[30px] h-[40px] px-[30px] animated-btn hover:scale-[0.95]`}>
                            Cancel
                        </button>
                        <button onClick={onConfirm} className={`bg-[#CF0058] border-[1px] border-[#CF0058] text-white text-[0.875rem] font-[600] gap-[4px] flex items-center justify-center  rounded-[30px] h-[40px] px-[30px] animated-btn hover:scale-[0.95]`}>
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationModal