import React from 'react';
import {projects} from "@/data";
import {PinContainer} from "@/components/ui/3d-pin";
import {FaLocationArrow} from "react-icons/fa";

const RecentProjects = () => {
    return (
        <div className="py-20" id="projects">
            <h1 className="heading">
                My  {' '}
                <span className="text-purple">recent project</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10 ">
                {projects.map(({id, title, des, img, iconLists, link}) => (
                    <div key={id} className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex item-center justify-center
                    sm:w-[570px] w-[80vw]">
                        <PinContainer title={link} href={link}>
                            <div className="relative flex item-center justify-center sm:w-[570px] w-[80vw]
                             overflow-hidden sm:h-[40vh] h-[30vh] lg:h-[30vh] mb-10">
                                {/* Background with conditional display for larger screens */}
                                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="/Ai.png" alt="bg-img" className="hidden sm:block" />
                                </div>

                                {/* Main project image - conditionally positioned for different screen sizes */}
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={img}
                                    alt={title}
                                    className="z-10 absolute bottom-0 sm:block"
                                    style={{
                                        maxHeight: '100%',
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>
                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                {title}
                            </h1>
                            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                                {des}
                            </p>
                            <div className="flex item-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {iconLists.map((icon, index) => (
                                        <div key={icon} className='border border-white/[0.2] rounded-full bg-black
                                        lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                             style={{ transform: `translateX(-${5 * index * 2}px)`}}>
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={icon} alt={icon} className="p-2" />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center items-center">
                                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">Check Live Site</p>
                                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentProjects;