import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | "secondary" | "outline" | "danger" // optional prop with one of four values
    size?: "sm" | "md" | "lg" // optional prop with one of three values
    children: ReactNode // anything can go inside the button
}