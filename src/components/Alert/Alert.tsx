import React from 'react'
import styles from "./Alert.modules.css"
import {AlertProps} from "./Alert.types"

const Alert: React.FC<AlertProps> = ({message, type = 'info', onClose}) => {
  return (
    <div className={`${styles.alert} ${styles[type]}`}>
        <span>{message}</span>
        {onClose && <button onClick={onClose} className={styles.closeButton}>x</button>}
    </div>
  )
}

export default Alert