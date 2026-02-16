import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './Accordion.module.css';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
        <div className={styles.item}>
            <button className={styles.header} onClick={onClick}>
                <span className={styles.title}>{title}</span>
                {isOpen ? <ChevronUp className={styles.icon} /> : <ChevronDown className={styles.icon} />}
            </button>
            <div
                className={`${styles.content} ${isOpen ? styles.open : ''}`}
            >
                <div className={styles.innerContent}>
                    {content}
                </div>
            </div>
        </div>
    );
};

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.accordion}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;
