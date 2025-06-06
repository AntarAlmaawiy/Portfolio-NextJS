import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "@/components/ui/MagicButton";
import Image from "next/image";
const Footer = () => {
    return (
        <footer className="w-full pb-10 relative min-h-[70vh] flex flex-col" id="contact">

            <div className="flex flex-col items-center flex-grow">
                <h1 className="heading lg:max-w-[45vw]">
                    Ready to take <span className="text-purple">your digital
                    presence to the next level?</span>
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today and let&apos;s discuss how I can help you
                    achieve your goals.
                </p>
                <a href="mailto:Antar.ali1@outlook.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow/>}
                        position="right"
                    />
                </a>
            </div>

            {/* Bottom section with absolute positioning */}
            <div className="absolute bottom-0 left-0 right-0 w-full px-5 sm:px-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex md:flex-row flex-col justify-between items-center py-6">
                        <p className="md:text-base text-sm md:font-normal font-light order-2 md:order-1">
                            Copyright © 2025 Antar Ali
                        </p>

                        <div className="flex items-center md:gap-3 gap-6 mb-4 md:mb-0 order-1 md:order-2">
                            {socialMedia.map((info) => (
                                <a
                                    key={info.id}
                                    href={info.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                                >
                                    <Image src={info.img} alt="icons" width={20} height={20}/>
                                </a>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;