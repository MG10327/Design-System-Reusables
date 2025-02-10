import React from 'react'
import styles from "./Badge.modules.css"
import { BadgeProps } from './Badge.types'

const Badge: React.FC<BadgeProps> = ({children, color = "primary", size = "medium"}) => {
  return (
    <div>
        <span className={`${styles.badge} ${styles[color]} ${styles[size]}`}>
            {children}
        </span>
    </div>
  )
}

export default Badge