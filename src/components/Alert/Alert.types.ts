import { ReactNode } from "react";

export interface AlertProps {
    message: string, // message type will be a string or it'll send an error back
    type?: 'info' | 'warning' | 'error' // the type of alert, optional but default is info
    onClose?: () => void // optional callback for when the close button is clicked
}