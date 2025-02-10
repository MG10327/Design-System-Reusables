import React from 'react'
import styles from "./Breadcrumb.module.css"
import { BreadcrumbProps } from './Breadcrumb.types'


const Breadcrumb: React.FC<BreadcrumbProps> =  ({items, separator = "/"}) => {
  return (
    <nav aria-label="breadcrumb">
        <ol className={styles.label} >
            {items.map((item, index) => (
                <li key={item.id} className={styles.breadcrumbItem}>
                    {item.href ? (
                        <a href={item.href} className={styles.breadcrumb}>
                            {item.label}
                        </a>
                    ) : (
                        <span className={styles.active}>{item.label}</span>
                    )}
                    {index < items.length - 1 && <span className={styles.separator}>{separator}</span>}
                </li>
            ))}
        </ol>
    </nav>
  )
}

export default Breadcrumb