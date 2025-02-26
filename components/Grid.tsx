// In your Grid.jsx component
'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import {gridItems} from "@/data"

// Dynamically import BentoGrid components with client-side only rendering
const BentoGrid = dynamic(
    () => import("./ui/BentoGrid").then(mod => mod.BentoGrid),
    { ssr: false }
)

const BentoGridItem = dynamic(
    () => import("./ui/BentoGrid").then(mod => mod.BentoGridItem),
    { ssr: false }
)

const Grid = () => {
    return (
        <section id="about">
            <BentoGrid>
                {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
                    <BentoGridItem
                        id={id}
                        key={id}
                        title={title}
                        description={description}
                        className={className}
                        img={img}
                        imgClassName={imgClassName}
                        titleClassName={titleClassName}
                        spareImg={spareImg}
                    />
                ))}
            </BentoGrid>
        </section>
    )
}
export default Grid