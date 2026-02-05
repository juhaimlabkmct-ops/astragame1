import { motion } from 'framer-motion';
import styles from './MessageDisplay.module.css';

export default function MessageDisplay({ scenario }) {
    if (!scenario) return null;

    const { type, sender, subject, body, dramaLevel } = scenario;

    // Generate drama emojis based on level
    const getDramaEmojis = (level) => {
        if (level >= 8) return '🚨🚨🚨';
        if (level >= 5) return '⚠️⚠️';
        if (level >= 3) return '⚠️';
        return '';
    };

    return (
        <div className={styles.wrapper}>
            <motion.div
                key={scenario.id || JSON.stringify(scenario)}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`${styles.messageContainer} ${styles[type.toLowerCase()]} glass`}
            >
                <div className={styles.header}>
                    <div className={styles.typeLabel}>
                        {type === 'Email' && '📧'}
                        {type === 'SMS' && '💬'}
                        {type === 'WhatsApp' && '📱'}
                        <span>{type} Message</span>
                    </div>
                    {dramaLevel > 2 && (
                        <div className={styles.dramaIndicator} title="Drama Level">
                            {getDramaEmojis(dramaLevel)}
                        </div>
                    )}
                </div>

                <div className={styles.messageContent}>
                    <div className={styles.metadata}>
                        <div className={styles.sender}>
                            <span className={styles.label}>From:</span>
                            <span className={styles.value}>{sender}</span>
                        </div>

                        {subject && (
                            <div className={styles.subject}>
                                <span className={styles.label}>Subject:</span>
                                <span className={styles.value}>{subject}</span>
                            </div>
                        )}
                    </div>

                    <div className={styles.divider} />

                    <div className={styles.body}>
                        {body}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
