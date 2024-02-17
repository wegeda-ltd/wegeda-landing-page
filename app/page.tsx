"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Faqs, SearchAndMeetArr } from "@/data/home";
import Image from "next/image";
import { useState } from "react";
import TypewriterComponent from "typewriter-effect";




export default function Home() {

  const [currentQuestion, setCurrentQuestion] = useState('')
  const [showChat, setShowChat] = useState(false)

  return (
    <div className="min-h-[100vh] relative">
      <Navbar />

      <main className="sm:mt-[120px] mt-[100px]">

        {/* Find your next housemate */}
        <section className="relative hero w-[100%]">
          <div className="flex sm:p-24 py-24 px-10 z-[3] relative sm:flex-row flex-col">
            <div className="flex-1 sm:pt-[100px]">
              <h6 className="font-[500] sm:text-[2rem] text-[1.4375rem]">Find your next</h6>
              <div className="relative ">
                <h1 className="font-[700] sm:text-[5.3125rem] text-[3.125rem] text-[#A60046]">
                  <TypewriterComponent

                    options={{
                      strings: ["Housemates", "Roommates", "House to Rent", "Room to Rent"],
                      autoStart: true,
                      delay: 75,
                      loop: true,
                      cursor: '.',
                      cursorClassName: 'text-[1px]'

                    }}

                  />
                </h1>
                <Image
                  className="absolute bottom-[0px] right-[20%]"
                  src={'/icons/signature.svg'}
                  alt="signature"
                  width={292}
                  height={38.35}
                />
              </div>


              <div className="flex items-center gap-[15px] mt-[50px] max-[620px]:mb-[50px]">
                <button>
                  <Image
                    src={'/icons/appstore.svg'}
                    alt="app store"
                    width={149.35}
                    height={44.64}
                  />
                </button>
                <button>
                  <Image
                    src={'/icons/playstore.svg'}
                    alt="app store"
                    width={149.35}
                    height={44.64}
                  />
                </button>
              </div>

            </div>
            <div className="flex-1 flex gap-[100px] relative sm:w-[50%] ">
              <div className="relative sm:w-fit w-[100%]">
                <div
                  className="max-[620px]:hidden rounded-[20px] w-[300px] h-[450px] border-[1px] border-[#CF7997]"
                />
                <Image
                  src={'/images/woman-pressing-phone.png'}
                  alt="woman on wegeda"
                  width={300}
                  height={450}
                  className="sm:absolute bottom-[40px] left-[40px] sm:w-[300px] w-[100%]  "
                />

              </div>
              <div className="max-[620px]:hidden relative w-fit sm:absolute right-[0px] top-[220px]">
                <div
                  className=" rounded-[20px] w-[300px] h-[450px] border-[1px] border-[#CF7997]"
                />
                <Image
                  src={'/images/man-pressing-phone.png'}
                  alt="man on wegeda"
                  width={300}
                  height={450}
                  className="absolute bottom-[40px] right-[40px]"
                />

              </div>

              <Image
                className="absolute bottom-[-80px] left-[28%] max-[620px]:hidden"
                src={'/icons/join.svg'}
                width={153.47}
                height={54.72}
                alt="join"
              />

            </div>
          </div>


        </section>


        {/* Search and meet */}
        <section className="right-gradient max-[620px]:pt-[80px]">
          <div className=" sm:p-24 py-24 px-10 relative">
            <h3 className="sm:w-[402px] w-[100%] sm:text-[2.5rem] text-[1.875rem] font-[600] sm:leading-[52px] leading-[42px]">
              Search, chat & meet
              with housemates
            </h3>
            <p
              className="mt-[10px] sm:w-[560px]  w-[100%] sm:text-[1.5rem] text-[1.125rem] font-[500] text-[#4E4E4E]"
            >We have designed a secured platform for
              you to find a trustworthy and verified roommate</p>


            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-2 mt-[58px]">
              {
                SearchAndMeetArr.map(({ icon, title, desc }, index) => (
                  <div key={index} className="flex gap-[24px] mb-[30px] items-start">
                    <Image
                      src={icon}
                      alt=""
                      width={80}
                      height={80}
                      className="sm:w-[80px] sm:h-[80px] w-[40px] h-[40px]"
                    />
                    <div>
                      <h4 className="sm:text-[1.75rem] text-[1.125rem] font-[500]">{title}</h4>
                      <p className=" text-[#4E4E4E] sm:text-[1.25rem] text-[0.85rem] sm:mt-[10px] max-w-[95%]">{desc}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>


        {/* Banner */}
        <section className="flex h-fit items-center justify-center px-[2.5rem]">
          <Image
            className="w-[100%]"
            src={'/icons/banner.svg'}
            alt="banner"
            width={1880}
            height={350}
          />
        </section>


        {/* Live the life */}
        <section>
          <div className="sm:p-24 py-24 ">
            <div className="flex sm:p-24 p-10  gap-24 sm:flex-row flex-col  sm:items-center rounded-[20px] bg-white shadow-sm">

              <Image
                src={'/icons/home-roomates.svg'}
                alt="wegeda home"
                width={319.28}
                height={614}
              />


              <div className="sm:mt-[0]">
                <h2 className=" sm:w-[379px] sm:text-[4rem] text-[2.5rem] font-[600] sm:leading-[80px] leading-[50px]">Live the life you deserve</h2>
                <p
                  className="sm:mt-[24px] mt-[12px] text-[#222] sm:w-[600px] font-[400] sm:text-[1.3125rem] text-[1rem] sm:leading-[35px] leading-[30px]"
                >
                  Find your next roommate from a community of
                  trustworthy & verified house owners & house seekers.
                  No need for agent fees. Get recommendations tailored
                  to your preference.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* FAQ */}
        <section>

          <div className="sm:p-24 p-10 ">
            <h4
              className="text-center font-[500] sm:text-[2.5rem] text-[1.5rem]  mb-[34px]"
            >Frequently Asked Questions(FAQ)</h4>


            <div className="w-[100%]">
              {Faqs.map(({ question, answer }, index) => (
                <div
                  onClick={() => setCurrentQuestion(prevQuestion => prevQuestion === question ? '' : question)}
                  key={index} className={` cursor-pointer faq h-fit  sm:px-24 ${currentQuestion === question ? 'bg-[#FFFAFC] py-4' : ''}`}>
                  <div className={`flex items-center justify-between h-[80px] faq  ${currentQuestion === question ? '' : 'border-b-[1px]'} border-b-[#DDD]`}>
                    <h5
                      className="font-[500] sm:text-[1.75rem] text-[1.125rem] text-[#CF0058]"
                    >{question}</h5>

                    <Image
                      className={`sm:w-[40px] sm:h-[40px] w-[20px] h-[20px] ${currentQuestion === question ? '' : 'rotate-[180deg]'}`}
                      src={'/icons/more.svg'}
                      width={40}
                      height={40}

                      alt="expand"
                    />

                  </div>

                  {currentQuestion === question &&
                    <p className="sm:text-[1.3125rem] text-[1rem] sm:leading-[35px] leading-[26px] text-[#222]">{answer}</p>
                  }
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* Foooter */}
        <Footer />
      </main>


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
    </div>
  );


}
