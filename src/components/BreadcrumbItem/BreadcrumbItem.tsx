import React from 'react'
import { BreadCrumbItemProps } from './BreadcrumbItem.types'
import styles from "./BreadcrumbItem.module.css" // module scopes style class names to the component they're used in

const BreadcrumbItem: React.FC<BreadCrumbItemProps> = ({label, href, isLast, separator }) => {
  return (
    <li className={styles.BreadcrumbItem}>
        {href ? (
            <a href={href} className={styles.link}>
                {label}
            </a>
        ) : (
            <span className={styles.active}>{label}</span>
        )}
        {!isLast && <span className={styles.separator}>{separator}</span>}
    </li>
  )
}

export default BreadcrumbItem