import styles from './GameControls.module.css';

export default function GameControls({ onAnswer, disabled }) {
    return (
        <div className={styles.controls}>
            <button
                className={`${styles.btn} ${styles.phishBtn}`}
                onClick={() => onAnswer(true)}
                disabled={disabled}
            >
                🎣 It's a Phish!
            </button>
            <button
                className={`${styles.btn} ${styles.safeBtn}`}
                onClick={() => onAnswer(false)}
                disabled={disabled}
            >
                ✅ It's Safe
            </button>
        </div>
    );
}
