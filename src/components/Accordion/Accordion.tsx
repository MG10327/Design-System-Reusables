import { ReactNode, use, useContext, useState } from "react"
import styles from "./Accordion.modules.css"
import { createContext } from "vm";

interface AccordionProps {
    children: ReactNode
}

interface AccordionItemProps {
    title: string;
    children: ReactNode;
}

const AccordionContext = createContext<{openIndex : string | null; setOpenIndex (index: number) => void }>({ //  reinforces that these context object keys will have these types of values before they're written
    openIndex: null,
    setOpenIndex: () => {}
})

export const Accordion = ({children}: AccordionProps) => { // applies our accordion props to this component
    const [openIndex, setOpenIndex] = useState<string | null>(null) // reinforces the shape of the key and value before state value is defined

    return (
        <AccordionContext.Provider value={{openIndex, setOpenIndex}}>
            <div className={styles.accordion}>{children}</div>
        </AccordionContext.Provider>
    )
}

export const AccordionItem = ({title, children}: AccordionItemProps) => {
    const {openIndex, setOpenIndex} = useContext(AccordionContext) // applies accordion context
    const isOpen = openIndex === title

    return (
        <div className={styles.accordionItem}>
            <button
                className={styles.accordionHeader}
                onClick={() => setOpenIndex(isOpen ? null : title)}
                aria-expanded={isOpen}
            >
                {title}
            </button>

            {isOpen && <div className={styles.accordionContext}>{children}</div>}
        </div>
    )
}