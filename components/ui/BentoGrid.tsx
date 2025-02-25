'use client'
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "@/components/ui/GradientBg";
import { GlobeDemo } from "@/components/ui/GridGlobe";
import { useState } from "react";
import animationData from '@/data/confetti.json';
import Lottie from "react-lottie";
import MagicButton from "@/components/ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image"; // Add this import

export const BentoGrid = ({
                              className,
                              children,
                          }: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
                                  className,
                                  title,
                                  description,
                                  id,
                                  img,
                                  imgClassName,
                                  titleClassName,
                                  spareImg
                              }: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id?: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('Antar.ali1@outlook.com');
        setCopied(true);
    }

    return (
        <div
            className={cn(
                "row-span-1 overflow-hidden relative rounded-3xl border " +
                "group/bento hover:shadow-xl transition " +
                "duration-200 shadow-input dark:shadow-none justify-between flex " +
                "flex-col space-y-4 border-white/[0.1]",
                className
            )}
            style={{
                background: "rgb(4,7,29)",
                backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
        >
            <div className={`${id === 6 && 'flex flex-col items-center'} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <Image
                            src={img}
                            alt={img}
                            className={cn(imgClassName, 'object-cover object-center')}
                            fill // Use fill layout instead of setting specific dimensions
                            sizes="(max-width: 768px) 100vw, 50vw" // Responsive sizing hint
                            style={{
                                objectFit: 'cover', // Make sure this style is applied directly
                                objectPosition: 'center'
                            }}
                        />
                    )}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                    {spareImg && (
                        <Image
                            src={spareImg}
                            alt={spareImg}
                            className={'object-cover object-center w-full h-full'}
                            width={300}
                            height={300}
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center'
                            }}
                        />
                    )}
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation>
                    </BackgroundGradientAnimation>
                )}

                <div className={cn(
                    titleClassName, "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex " +
                    "flex-col px-5 p-5 lg:p-10")}>
                    <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs ld:text-base z-10">
                        {description}
                    </div>
                    <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                        {title}
                    </div>
                </div>
                {id == 2 && <GlobeDemo/>}

                {id === 3 && (
                    <div className="absolute top-16 right-4 z-10">
                        <div className="flex gap-3">
                            <div className="flex flex-col gap-2">
                                {['React.js', 'Next.js', 'TypeScript'].map((item) => (
                                    <span
                                        key={item}
                                        className="py-2 lg:py-2.5 px-4 text-xs lg:text-sm opacity-50
                                 lg:opacity-100 rounded-lg text-center bg-[#10132E]
                                 whitespace-nowrap"
                                    >
                        {item}
                    </span>
                                ))}
                            </div>
                            <div className="flex flex-col gap-2">
                                {['MongoDB', 'Node.js', 'Python'].map((item) => (
                                    <span
                                        key={item}
                                        className="py-2 lg:py-2.5 px-4 text-xs lg:text-sm opacity-50
                                 lg:opacity-100 rounded-lg text-center bg-[#10132E]
                                 whitespace-nowrap"
                                    >
                        {item}
                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {id === 6 && (
                    <div className="mt-auto flex justify-center w-full mb-10">
                        <div className="relative">
                            <div className={`absolute -top-16 right-0`}>
                                <Lottie options={{
                                    loop: copied,
                                    autoplay: copied,
                                    animationData: animationData,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice',
                                    }
                                }}/>
                            </div>
                            <MagicButton
                                title={copied ? 'Email copied' : 'Copy my email'}
                                icon={<IoCopyOutline/>}
                                position="left"
                                otherClasses="bg-[#10132E] md:mt-0"
                                handleClick={handleCopy}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};