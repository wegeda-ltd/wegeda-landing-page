import Image from "next/image"

function FooterNewsLetter() {
    return (
        <>
            <Image
                className="w-[100%] h-auto"
                src={'/icons/banner.svg'}
                alt="banner"
                width={1880}
                height={350}
            />


            <div className='flex justify-between mt-[100px] px-16'>
                <div>
                    <h3 className='text-[1.875rem] mb-[16px] font-[700]'>Sign up for exclusive updates:</h3>
                    <p className='text-[1.25rem]'>Stay in the loop with everything you need to know.</p>
                </div>
                <form className=''>
                    <div className='flex items-center gap-[16px]'>
                        <div className='form-group w-[480px] h-[43px] border-[1px]'>
                            <input
                                className=''
                                placeholder='Enter your email'
                            />
                        </div>

                        <button className='rounded-[8px] h-[44px] w-[112px]  animated-btn text-white flex items-center justify-center sm:text-[1rem] text-[0.546875rem] font-[600] bg-[#CF0058] hover:border-[#CF0058] hover:bg-white hover:text-[#CF0058] hover:border-[1px]'>
                            Subscribe
                        </button>

                    </div>

                </form>


            </div>
        </>
    )
}


export default FooterNewsLetter;