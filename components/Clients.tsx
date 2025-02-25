import React from 'react'
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "@/components/ui/infiniteMovingCards";
import Image from "next/image"; // Add this import

const Clients = () => {
    return (
        <div className="py-20" id="testimonials">
            <h1 className="heading mb-16">
                Motivating Words From
                <span className="text-purple"> Word Leading Programmers</span>
            </h1>
            <div className="flex flex-col items-center">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-16">
                    {companies.map(({ id, img, name, nameImg }) => (
                        <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                            <Image
                                src={img}
                                alt={name}
                                width={40}
                                height={40}
                                className="md:w-10 w-5 rounded-full"
                            />
                            <Image
                                src={nameImg}
                                alt={name}
                                width={96}
                                height={24}
                                className="md:w-24 w-20"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Clients;