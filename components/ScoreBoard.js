import { motion } from 'framer-motion';
import styles from './ScoreBoard.module.css';

export default function ScoreBoard({ score, totalRounds, streak }) {
    const accuracy = totalRounds > 0 ? Math.round((score / totalRounds) * 100) : 0;

    return (
        <div className={`${styles.scoreboard} glass`}>
            <div className={styles.stat}>
                <div className={styles.label}>Score</div>
                <motion.div
                    key={score}
                    initial={{ scale: 1.2, color: '#fff' }}
                    animate={{ scale: 1, color: 'var(--accent-green)' }}
                    className={styles.value}
                >
                    {score} <span className={styles.total}>/ {totalRounds}</span>
                </motion.div>
            </div>

            <div className={styles.stat}>
                <div className={styles.label}>Accuracy</div>
                <div className={styles.value}>{accuracy}%</div>
            </div>

            <div className={`${styles.stat} ${streak > 2 ? styles.hot : ''}`}>
                <div className={styles.label}>Streak</div>
                <motion.div
                    key={streak}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className={styles.value}
                >
                    {streak > 2 && <span className={styles.fire}>🔥</span>}
                    {streak}
                </motion.div>
            </div>
        </div>
    );
}
