import { ReactNode } from "react";

export interface AvatarProps {
    src: string,
    alt: string,
    size?: 'small' | 'medium' | 'large' // optional prop with 1 of 3 values
    border?: boolean // true false value. optional prop
}