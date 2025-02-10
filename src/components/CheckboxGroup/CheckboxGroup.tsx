import React from 'react'
import { CheckboxGroupProps } from './CheckboxGroup.types'
import styles from "./CheckboxGroup.module.css"
import clsx from "clsx"

const CheckboxGroup:  React.FC<CheckboxGroupProps> = ({children, className, name, onChange, value}) => {
    const handleChange = (newValue: string) => {
        const newValues = value.includes(newValue)
        ? value.filter((v) => v !== newValue)
        : [...value, newValue]
        onChange?.(newValues)
    }

    return (
    <div className={clsx(styles.CheckboxGroup, className)}>
        {React.Children.map(children, (child) =>
            React.isValidElement(child)
            ? React.cloneElement(child, {
                name,
                checked: value.includes(child.props.value),
                onChange: () => handleChange(child.props.value)
            })
            : child
        )}
    </div>
  )
}

export default CheckboxGroup