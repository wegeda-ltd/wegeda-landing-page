import React from 'react'


const cats = [
    {
        name: 'Tips for roommates',
        total: 20
    },
    {
        name: 'Tips for landlords',
        total: 13
    },
    {
        name: 'Neighbourhood spotlights',
        total: 10
    },
    {
        name: 'Roommates success stories',
        total: 4
    },
    {
        name: 'Tips for roommates',
        total: 20
    },
    {
        name: 'Tips for landlords',
        total: 13
    },
    {
        name: 'Neighbourhood spotlights',
        total: 10
    },
    {
        name: 'Roommates success stories',
        total: 4
    },
]

interface IFilterModal {
    onSelect: (cat: any) => void;
}
function FilterModal({ onSelect }: IFilterModal) {
    return (
        <div className='z-[100000] w-[100%] h-[100%] bg-[#1018281A] fixed top-[0] flex justify-center p-[126px]'>

            <div className='w-[544px] py-[24px] rounded-[12px] drop-shadow-md bg-white h-fit'>
                <h5 className='text-[1.125rem] px-[24px] font-[700] mb-[8px]'>Categories</h5>
                <div className='px-[14px] max-h-[320px] overflow-auto w-[100%] mt-[12px]'>

                    {cats.map((category, index) => (
                        <button
                            onClick={() => onSelect(category)}
                            key={index} className='px-[8px] rounded-sm animated-btn hover:scale-[0.97] hover:bg-[#ececec] text-[1rem] font-[600] flex items-center justify-between h-[44px] w-[100%]'>
                            <span>
                                {category.name}
                            </span>

                            <span>
                                {category.total}
                            </span>
                        </button>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default FilterModal