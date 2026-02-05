import styles from './ScoreBoard.module.css';

export default function ScoreBoard({ score, totalRounds, streak }) {
    const accuracy = totalRounds > 0 ? Math.round((score / totalRounds) * 100) : 0;

    return (
        <div className={styles.scoreboard}>
            <div className={styles.stat}>
                <div className={styles.label}>Score</div>
                <div className={styles.value}>{score} / {totalRounds}</div>
            </div>

            <div className={styles.stat}>
                <div className={styles.label}>Accuracy</div>
                <div className={styles.value}>{accuracy}%</div>
            </div>

            <div className={styles.stat}>
                <div className={styles.label}>🔥 Streak</div>
                <div className={styles.value}>{streak}</div>
            </div>
        </div>
    );
}
