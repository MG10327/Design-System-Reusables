import React from 'react'
import styles from "./Avatar.modules.css"
import { AvatarProps } from './Avatar.types'

const Avatar: React.FC<AvatarProps> = ({src, alt, size = 'medium', border = false}) => {
    const avatarClass = `${styles.avatar} ${styles[size]} ${border ? styles.border : ''}` // if a border prop gets passed through then we use it, if not then we put nothing there

    return (
        <img src={src} alt={alt} className={avatarClass}
        width={size === 'small' ? 32 : size === 'large' ? 96 : 48}
        height={size === 'small' ? 32 : size === 'large' ? 96 : 48}   />
    )
}

export default Avatar