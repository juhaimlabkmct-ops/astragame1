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
        <div className={`${styles.messageContainer} ${styles[type.toLowerCase()]} fade-in`}>
            <div className={styles.header}>
                <div className={styles.typeLabel}>
                    {type === 'Email' && '📧'}
                    {type === 'SMS' && '💬'}
                    {type === 'WhatsApp' && '📱'}
                    <span>{type}</span>
                </div>
                {dramaLevel > 2 && (
                    <div className={styles.dramaIndicator}>
                        {getDramaEmojis(dramaLevel)}
                    </div>
                )}
            </div>

            <div className={styles.messageContent}>
                <div className={styles.sender}>
                    <strong>From:</strong> {sender}
                </div>

                {subject && (
                    <div className={styles.subject}>
                        <strong>Subject:</strong> {subject}
                    </div>
                )}

                <div className={styles.body}>
                    {body}
                </div>
            </div>
        </div>
    );
}
