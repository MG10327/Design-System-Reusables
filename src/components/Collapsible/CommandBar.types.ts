import { ReactNode } from "react";

export interface CollapsibleProps {
    children: ReactNode, // anything can go between the open and closing tags
    className?: string,
    isOpen?: boolean,
    onToggle?: () => void
}