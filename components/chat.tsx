"use client";



import Image from "next/image";

import React, { useState } from 'react'

function Chat() {
    const [showChat, setShowChat] = useState(false)

    return (
        <div className={`fixed sm:right-[40px] right-[15px] top-[80%] z-[50] ${showChat ? 'h-[638px] mt-[-552px] w-[334px] overflow-y-hidden' : ''}`}>
            {showChat && <form className="bg-white shadow-sm w-[334px] rounded-[8px] h-[552px] overflow-hidden show-chat-form">
                <div className="show-chat-cont">
                    <div className="bg-[#CF0058] p-4 text-white">
                        <div className="flex items-center justify-between ">
                            <Image
                                src="/icons/logo-white.svg"
                                alt="logo"
                                width={25.19}
                                height={24}
                            />
                            <Image
                                src="/icons/users.png"
                                alt="logo"
                                width={80}
                                height={32}
                            />
                        </div>

                        <h6 className="text-[1.125rem] font-[700] mt-[32px]">Hey There 👋 </h6>
                        <p className="text-[0.75rem]">How may we help you! Leave us a message below.</p>
                    </div>
                    <div
                        className="p-4 border-x-[1px] rounded-b-[8px]"
                    >
                        <div className="form-group flex-1 border-[1px]">
                            <input id="name" name="name" type="text" required />
                            <label htmlFor="name">Full Name</label>
                        </div>
                        <div className="form-group flex-1 mt-6 border-[1px]">
                            <input id="email" name="email" type="email" required />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-group flex-1 mt-6 border-[1px]">
                            <input id="tel" name="tel" type="tel" required />
                            <label htmlFor="tel">Phone (Optional)</label>
                        </div>

                        <div className="form-group flex-1 mt-6 border-[1px]" >
                            <textarea name="message" id="message" className="h-[120px]" required />
                            <label htmlFor="message" className="!top-[20%]">Message</label>
                        </div>


                        <div className="flex justify-end mt-4">
                            <button className="animated-btn rounded-[4px] bg-[#CF0058] h-[40px] w-[153px] text-white border-[1px] border-[#CF0058] hover:text-[#CF0058] hover:bg-white text-[0.75rem]">
                                Send
                            </button>
                        </div>

                    </div>
                </div>
            </form>}
            <button className={`${showChat ? 'absolute bottom-[17px] right-[0px]' : ''} chat`} onClick={() => setShowChat(prev => !prev)}>
                <Image
                    src={showChat ? '/icons/chat-show.png' : '/icons/chat.png'}
                    alt="chat"
                    height={68}
                    width={68}
                    className="min-w-[68px]"
                />
            </button>
        </div>

    )
}

export default Chat