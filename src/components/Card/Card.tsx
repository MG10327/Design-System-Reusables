import React from 'react'
import clsx from 'clsx'
import styles from "./Card.module.css"
import { CardProps } from './Card.types'

const Card: React.FC<CardProps> = ({children, className, variant = "basic"}) => {
  return (
    <div className={clsx(styles.card, styles[variant], className)}>
        {children}
    </div>
  )
}

export default Card