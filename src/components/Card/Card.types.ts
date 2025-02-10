import { ReactNode } from "react";

export interface CardProps {
    children: ReactNode, // this means anything can go inbetween the opening and closing tag.
    className?: string, // required prop with a string value
    variant?: 'basic' | 'outlined' | 'elevated' // optional props with one of three values
}