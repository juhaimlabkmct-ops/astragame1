import { motion } from 'framer-motion';
import useHaptic from '../hooks/useHaptic';
import useGameSound from '../hooks/useGameSound';
import styles from './GameControls.module.css';

export default function GameControls({ onAnswer, disabled }) {
    const { triggerHaptic } = useHaptic();
    const { playSound } = useGameSound();

    const handleAnswer = (isPhish) => {
        if (disabled) return;

        triggerHaptic(20);
        playSound('click');
        onAnswer(isPhish);
    };

    return (
        <div className={styles.controls}>
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className={`${styles.btn} ${styles.phishBtn}`}
                onClick={() => handleAnswer(true)}
                disabled={disabled}
                onMouseEnter={() => !disabled && playSound('hover')}
                aria-label="Mark as Phishing"
            >
                <span className={styles.icon}>🎣</span>
                <span className={styles.label}>It's a Phish!</span>
            </motion.button>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className={`${styles.btn} ${styles.safeBtn}`}
                onClick={() => handleAnswer(false)}
                disabled={disabled}
                onMouseEnter={() => !disabled && playSound('hover')}
                aria-label="Mark as Safe"
            >
                <span className={styles.icon}>✅</span>
                <span className={styles.label}>It's Safe</span>
            </motion.button>
        </div>
    );
}
