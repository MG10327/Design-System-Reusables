import { ReactNode } from "react";

export interface CarouselProps {
    children: ReactNode,
    className?: string,
    variant?: "basic" | "outlined"
}