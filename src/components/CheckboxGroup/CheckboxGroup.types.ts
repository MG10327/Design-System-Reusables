import { ReactNode } from "react";

export interface CheckboxGroupProps {
    children : ReactNode,
    className?: string,
    name: string,
    onChange?: (value: string[]) => void, //
    value: string[] // array of strings since this is for multiple checkboxes
}