import { Button } from '@headlessui/react'
import React from 'react'
import graph from '../../assets/graph.png'
import CodeIcon from '@mui/icons-material/Code';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import AirplayOutlinedIcon from '@mui/icons-material/AirplayOutlined';
import Building from '../../assets/building.jpeg';
import crm from '../../assets/crm.jpeg';
import ecom from '../../assets/ecommerce.jpeg';
import sam from '../../assets/sam.png';

export default function Home() {
    return (
        <div>
            <div className='mt-16'>
                <div className='flex justify-center'>
                    <div className="w-[55%]">
                        <div className='flex justify-center'>
                            <div className='inline text-[#fc9ed9] border border-[#262626] p-2 rounded-full flex justify-center'>
                                <span className="bg-[#fc9ed9] text-black text-xs font-semibold mr-2 px-2.5 py-1 rounded-full">
                                    NEW
                                </span>
                                Latest integration just arrived
                            </div>
                        </div>
                        <div className='text-center text-[75px] leading-[84px] mt-8'>
                            <div className="text-white">Empowering Businesses</div>
                            <div className="text-white">with Cutting-Edge IT Solutions!</div>
                        </div>
                        <div className='text-white text-[20px] flex justify-center'>
                            <div className='text-center w-[50rem] p-2'>
                                From powerful CRM systems to innovative E-commerce solutions, QuadX delivers seamless technology to help businesses scale smarter.
                            </div>
                        </div>
                        <div className='flex justify-center mt-3'>
                            <div className='w-[30rem] flex justify-between'>
                                <Button className="bg-white text text-black text-xl px-6 py-3 rounded-[4px]">Get Started Today</Button>
                                <Button className="bg-black border border-white text text-white text text-black text-xl px-6 py-3 rounded-[4px]">Explore Our Solutions</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-10">
                    <div className="w-[90%] pt-2 px-4 shadow-[0_0_50px_#A0467E] rounded-md" style={{ background: "linear-gradient(90deg, #1a0917 0%, #2b1021 48%, #A0467E 100%)" }}>
                        <img
                            alt="Your Company"
                            src={graph}
                            className="h-full w-auto opacity-100 rounded-md"
                        />
                    </div>
                </div>


                <div className='mt-40'>
                    <div className='text text-white text-[40px] text-center'>
                        <div>
                            Comprehensive IT Services Tailored to Your
                        </div>
                        <div className='text-[#f2a2d4]'>
                            Business Needs
                        </div>
                    </div>

                    <div className='mt-20 flex justify-center'>
                        <div className='w-[90%] text text-white text-[25px] text-center flex justify-between'>
                            <div>
                                <div className='mb-8'>
                                    <CodeIcon style={{ fontSize: 124, color: '#A0467E' }} />
                                </div>
                                <div>
                                    Custom Web Development
                                </div>
                                <div className='border-t my-2'></div>
                                <div className='flex justify-center'>
                                    <div className='w-[70%] text text-[15px] font-light'>
                                        Scalable, high-performance
                                        websites & apps.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='mb-8'>
                                    <CloudQueueIcon style={{ fontSize: 124, color: '#A0467E' }} />
                                </div>
                                <div>Cloud Solutions</div>
                                <div className='border-t my-2'></div>
                                <div className='flex justify-center'>
                                    <div className='w-[70%] text text-[15px] font-light'>
                                        Secure & efficient cloud-based infrastructure.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='mb-8'>
                                    <GppGoodOutlinedIcon style={{ fontSize: 124, color: '#A0467E' }} />
                                </div>
                                <div>
                                    Cybersecurity
                                </div>
                                <div className='border-t my-2'></div>
                                <div className='flex justify-center'>
                                    <div className='w-[70%] text text-[15px] font-light'>
                                        Protect your business with top-tier
                                        security solutions.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='mb-8'>
                                    <AirplayOutlinedIcon style={{ fontSize: 124, color: '#A0467E' }} />
                                </div>
                                <div>
                                    IT Consultancy
                                </div>
                                <div className='border-t my-2'></div>
                                <div className='flex justify-center'>
                                    <div className='w-[70%] text text-[15px] font-light'>
                                        Expert guidance for digital
                                        transformation.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center mt-20'>
                        <Button className="bg-[#411d33] text text-white text-xl px-6 py-3 border-2 border-[#56364a] shadow-inner rounded-[4px]">Explore Our Services</Button>
                    </div>
                </div>

                <div className='mt-40'>
                    <div>
                        <img
                            src={Building}
                            className="object-cover"
                            style={{
                                maskImage:
                                    "linear-gradient(to top, rgb(0 0 0 / 0%) 0%, rgb(0, 0, 0) 30%, rgb(0, 0, 0) 70%, rgb(0 0 0 / 0%) 100%)",
                                WebkitMaskImage:
                                    "linear-gradient(to top, rgb(0 0 0 / 0%) 0%, rgb(0, 0, 0) 30%, rgb(0, 0, 0) 70%, rgb(0 0 0 / 0%) 100%)",
                            }}
                        />
                        <div className='relative -top-44 text-white text-[95px] font-normal text-center leading-none'>
                            Revolutionary Tech Products :
                        </div>
                        <div
                            className="w-[60%] float-right relative -top-43 text-[95px] font-normal bg-clip-text text-transparent leading-none"
                            style={{
                                backgroundImage: "radial-gradient(circle, #F2A2D4 20%, #FFFFFF 50%, #F2A2D4 80%)"
                            }}
                        >
                            Designed for Growth
                        </div>
                    </div>

                    <div>
                        <div className='w-[74%] mx-auto flex justify-between'>
                            <div className='bg-[#200b18] w-[678px]'>
                                <img src={crm} className='h-[344px] w-[678px]' />
                                <div className='p-6'>
                                    <div className='text text-white text-[47px]'>QuadX CRM</div>
                                    <div className='text text-white text-[24px] mt-3'>
                                        Streamline operations, automate workflows, And drive growth.
                                    </div>
                                </div>
                            </div>

                            <div className='bg-[#200b18] w-[678px]'>
                                <img src={ecom} className='h-[344px] w-[678px]' />
                                <div className='p-6'>
                                    <div className='text text-white text-[47px]'>QuadX E-Commerce Solution</div>
                                    <div className='text text-white text-[24px] mt-3'>
                                        Smart, scalable, and secure online stores..
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center mt-15'>
                            <Button className="bg-[#411d33] text text-white text-xl px-6 py-3 border-2 border-[#56364a] shadow-inner rounded-[4px]">Explore Our Services</Button>
                        </div>
                    </div>

                    <div className='mt-35'>
                        <div className='text text-white text-[52px] text-center'>
                            What Our Clients Say About Us
                        </div>
                        <div className='text text-white text-[18px] text-center'>
                            Worked With Experts See What People Say
                        </div>

                        {/* <div className='border border-white w-[70%]'>
                        </div> */}
                        <div className='mt-[10rem]'>
                            <div className='flex justify-center'>
                                <div>
                                    <img src={sam} alt='Black and White Image' className='h-[217px] filter grayscale' />
                                </div>
                                <div className='w-[30rem] flex justify-center items-center'>
                                    <div className='text text-white'>
                                        <div className='text text-[20px] w-[23rem]'>
                                            ”QuadX transformed our business with their CRM. Our sales team is more efficient than ever!”
                                        </div>
                                        <div className='text text-[16px] mt-5 font-medium'>
                                            Talia Taylor
                                        </div>
                                        <div className='text text-[13px] mt-1'>
                                            Digital Marketing Director @ Quantum
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}