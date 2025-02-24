"use client";
import {WorldMap} from "@/components/ui/world-map";
import { motion } from "motion/react";

export function WorldMapDemo() {
    return (
        <div className="pt-0 pb-16 w-full">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="heading lg:max-w-[45vw] mx-auto">
                    <span className="text-white">Remote </span>
                    <span className="text-purple">
                        {"Connectivity".split("").map((word, idx) => (
                            <motion.span
                                key={idx}
                                className="inline-block"
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.04 }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </span>
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    I broke free from traditional boundaries. I work from anywhere, at the
                    comfort of my own house.
                </p>
            </div>
            <WorldMap
                lineColor="#9333ea"
                dots={[
                    { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } },
                    { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -23.5505, lng: -46.6333 } }, // Moved dot lower in Brazil (São Paulo)
                    { start: { lat: -23.5505, lng: -46.6333 }, end: { lat: 38.7223, lng: -9.1393 } },
                    { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } },
                    { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 43.1332, lng: 131.9113 } },
                    { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -1.2921, lng: 36.8219 } },
                ]}
            />
        </div>
    );
}