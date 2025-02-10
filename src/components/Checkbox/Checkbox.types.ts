import { ChangeEvent } from "react";

export interface CheckboxProps {
    id: string,
    label: string, // required prop with a string value
    checked: boolean, // required prop with a boolean true false value
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    disabled?: boolean, // optional prop with a boolean true false value
    className?: string // optional prop with a string value
}