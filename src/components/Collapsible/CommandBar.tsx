import React, { useState, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Collapsible.module.css';

interface CollapsibleProps {
  children: ReactNode;
  className?: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

const Collapsible: React.FC<CollapsibleProps> = ({
  children,
  className,
  isOpen = false,
  onToggle,
}) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  const handleToggle = () => {
    const newIsExpanded = !isExpanded;
    setIsExpanded(newIsExpanded);
    if (onToggle) {
      onToggle();
    }
  };

  return (
    <div className={clsx(styles.collapsible, className)}>
      <button
        className={clsx(styles.toggleButton, {
          [styles.open]: isExpanded,
          [styles.closed]: !isExpanded,
        })}
        onClick={handleToggle}
        aria-expanded={isExpanded}
      >
        Toggle
      </button>
      <div
        className={clsx(styles.content, {
          [styles.open]: isExpanded,
          [styles.closed]: !isExpanded,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapsible;
