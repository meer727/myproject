import React from 'react';
import logo from '../assets/logo.png';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function Footer() {
    return (
        <div className='p-10'>

            <div className='h-[25rem] flex justify-center items-center' >
                <div>
                    <div className='text text-white text-[56px]'>
                        Newsletter Signup
                    </div>
                    <div class="relative w-full max-w-md mt-6">
                        <input
                            type="text"
                            placeholder="Your email"
                            class="w-full pr-16 pl-4 py-2 border border-[#7c787b] border-[1px] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#7c787b]"
                        />
                        <button
                            class="absolute right-1 top-1 bottom-1 px-4 bg-white text-black border border-gray-300 rounded-md"
                        >
                            Join waitlist
                        </button>
                    </div>
                    <div className='text text-[16px] text-[#7c787b] mt-6 text-center'>
                        No credit card required · 7-days free trial
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-[1.3fr_1fr_1fr]">
                <div>
                    <div>
                        <img
                            alt="Your Company"
                            src={logo}
                            className="h-12 w-auto"
                        />
                    </div>
                    <div>
                        <div className='text text-white text-[22px] mt-5'>
                            Quadx is a logistics technology company that provides solutions for e-commerce, helping businesses optimize their supply chain. It specializes in last-mile delivery, offering services like real-time tracking, automated processes, and efficient routing. Quadx aims to improve customer satisfaction and operational efficiency with innovative, data-driven logistics solutions.
                        </div>
                    </div>
                    <div className='flex mt-[1rem]'>
                        <div className="bg-[#1f3664] w-[34px] h-[34px] rounded-full flex items-center justify-center">
                            <FacebookRoundedIcon style={{ fontSize: 39, color: '#bac5d4' }} />
                        </div>
                        <div className="bg-[#bac5d4] w-[34px] h-[34px] rounded-full flex items-center justify-center ml-[0.5rem]">
                            <TwitterIcon style={{ fontSize: 27, color: '#1f3664' }} />
                        </div>
                        <div className="bg-[#bac5d4] w-[34px] h-[34px] rounded-full flex items-center justify-center ml-[0.5rem]">
                            <LinkedInIcon style={{ fontSize: 27, color: '#1f3664' }} />
                        </div>
                        <div className="bg-[#bac5d4] w-[34px] h-[34px] rounded-full flex items-center justify-center ml-[0.5rem]">
                            <InstagramIcon style={{ fontSize: 27, color: '#1f3664' }} />
                        </div>
                    </div>
                </div>

                <div className="text text-white text-[24px] flex justify-center">
                    <div>
                        <div className='font-normal'>
                            Quick Links
                        </div>
                        <div className='font-light text-[21px] mt-[2rem]'>
                            <div >
                                Technologies
                            </div>
                            <div className='mt-[0.5rem]'>
                                Services
                            </div>
                            <div className='mt-[0.5rem]'>
                                Products
                            </div>
                            <div className='mt-[0.5rem]'>
                                About
                            </div>
                            <div className='mt-[0.5rem]'>
                                Blog
                            </div>
                            <div className='mt-[0.5rem]'>
                                Contact
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text text-white text-[24px] flex justify-center">
                    <div>
                        <div className='font-normal'>
                            Contact Information
                        </div>

                        <div className='font-light text-[21px] mt-[2rem]'>
                            <CallOutlinedIcon style={{ fontSize: 22, color: '#ffffff', marginRight: '0.5rem' }} />
                            +123-456-7890
                        </div>
                        <div className='font-light text-[21px] mt-[0.5rem]'>
                            <EmailOutlinedIcon style={{ fontSize: 22, color: '#ffffff', marginRight: '0.5rem' }} />
                            support@quadx.com
                        </div>
                        <div className='font-light text-[21px] mt-[0.5rem]'>
                            <LocationOnOutlinedIcon style={{ fontSize: 22, color: '#ffffff', marginRight: '0.2rem' }} />
                            123 Tech Street, Silicon Valley, CA.
                        </div>
                    </div>
                </div>
            </div>

            <div className='text text-white text-center text-[16px] font-light mt-[2rem]'>
                ©2025, QuadX.All Rights Reserved.
            </div>
        </div>

    )
}
