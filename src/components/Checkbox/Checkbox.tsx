import React from 'react'
import { CheckboxProps } from './Checkbox.types'
import styles from "./Checkbox.module.css"
import clsx from "clsx"

const Checkbox: React.FC<CheckboxProps> = ({id, label, checked, onChange, disabled = false, className}) => {
  return (
    <div className={clsx(styles.checkboxContainer, className)}>
        <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            className={className}
            aria-labelledby={id}
        />
        <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default Checkbox