import React from 'react'
import styles from "./Carousel.module.css"
import clsx from "clsx"
import { CarouselProps } from './Carousel.types'

const Carousel: React.FC<CarouselProps> = ({children,  className, variant = "basic"}) => {
    return (
    <div className={clsx(styles.carousel, styles[variant], className)}>
        {children}
    </div>
  )
}

export default Carousel