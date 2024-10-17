'use client'

import * as React from "react";
import { ModeToggle } from "../theme-toggle";

export function GridBackgroundDemo({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen w-full dark:bg-black bg-white relative flex justify-center bg-grid-black/[0.2] dark:bg-grid-white/[0.2]">
            {/* Radial gradient overlay */}
            {/* Theme toggle button in the top-right corner */}
            <div className="absolute top-4 right-4 z-20">
                <ModeToggle />
            </div>
            
            <div className="absolute inset-0 pointer-events-none dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>


            {/* Page content */}
            <div className="relative z-10 py-8">{children}</div>
        </div>
    );
}
