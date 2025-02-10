import React from 'react'
import Avatar from '../Avatar/Avatar'
import styles from "./AvatarGroup.modules.css"
import { AvatarGroupProps } from './AvatarGroup.types'

const AvatarGroup: React.FC<AvatarGroupProps> = ({avatars}) => {
  return (
    <div className={styles.avatarGroup}>
        {avatars.map((avatar, index) =>
            <Avatar
                key={index}
                src={avatar.src}
                alt={avatar.alt}
                size='small'
            />
        )}
    </div>
  )
}

export default AvatarGroup