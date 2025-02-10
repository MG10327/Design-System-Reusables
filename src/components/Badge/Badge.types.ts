import { ReactNode } from "react";

export interface BadgeProps {
    children: ReactNode,
    color?: 'primary' | "secondary",
    size?: 'small' | 'medium' // optional prop with one of two values.
}