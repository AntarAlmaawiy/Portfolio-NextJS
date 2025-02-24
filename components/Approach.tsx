"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";

const Approach = () => {
    return (
        <section className="w-full py-20">
            <h1 className="heading">
                My <span className="text-purple">Approach</span>
            </h1>

            <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
                <Card
                    title="Phase 1: Planning and Strategy"
                    icon={<AceternityIcon order="Phase 1" />}
                    description="Laying the groundwork with in-depth research, goal setting, and strategic planning to ensure a smooth development process."
                >
                    <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
                </Card>

                <Card
                    title="Phase 2: Design and Prototyping"
                    icon={<AceternityIcon order="Phase 2" />}
                    description="Transforming ideas into interactive designs with wireframes, UI/UX principles, and prototypes to refine the user experience."
                >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-black"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249]
                        ]}
                        dotSize={2}
                    />
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                </Card>

                <Card
                    title="Phase 3: Development and Deployment"
                    icon={<AceternityIcon order="Phase 3" />}
                    description="Bringing concepts to life through efficient coding, rigorous testing, and seamless deployment for optimal performance."
                >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[125, 211, 252]]}
                    />
                </Card>
            </div>
        </section>
    );
};

const Card = ({
                  title,
                  icon,
                  children,
                  description
              }: {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
    description: string;
}) => {
    const [hovered, setHovered] = React.useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-black/[0.2] group/canvas-card flex flex-col items-center justify-center dark:border-white/[0.2]
            max-w-sm w-full mx-auto p-4 lg:h-[35rem] relative rounded-3xl text-center"
        >
            <AnimatePresence>
                {hovered && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full absolute inset-0">
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20 flex flex-col items-center gap-4">
                {icon}
                <h2 className="dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative
                z-10 text-black font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2
                transition duration-200 text-3xl">
                    {title}
                </h2>
                <p className="text-sm dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative
                z-10 text-black font-medium group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2
                transition duration-200" style={{ color: '#e3ecff' }}>
                    {description}
                </p>
            </div>
        </div>
    );
};

const AceternityIcon = ({ order }: { order: string }) => {
    return (
        <button
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
            bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>

            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full
            bg-slate-950 px-5 py-2 font-bold text-white backdrop-blur-3xl text-2xl">
                {order}
            </span>
        </button>
    );
};

export default Approach;
