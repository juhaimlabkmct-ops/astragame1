import styles from './FeedbackPanel.module.css';

export default function FeedbackPanel({
    isCorrect,
    scenario,
    onNext
}) {
    if (!scenario) return null;

    return (
        <div className={`${styles.feedback} ${isCorrect ? styles.correct : styles.incorrect} fade-in`}>
            <div className={styles.result}>
                {isCorrect ? (
                    <>
                        <span className={styles.emoji}>🎉</span>
                        <h2>Correct!</h2>
                    </>
                ) : (
                    <>
                        <span className={styles.emoji}>😅</span>
                        <h2>Not Quite!</h2>
                    </>
                )}
            </div>

            <div className={styles.explanation}>
                <p className={styles.rebuttal}>{scenario.funnyRebuttal}</p>

                <div className={styles.details}>
                    <h3>🔍 What to Look For:</h3>
                    <ul>
                        {scenario.clues.map((clue, index) => (
                            <li key={index}>{clue}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.verdict}>
                    <strong>Verdict:</strong> This message was {scenario.isPhish ? '🎣 A PHISH' : '✅ SAFE'}
                </div>

                <div className={styles.difficulty}>
                    <span className={styles.difficultyBadge}>
                        Difficulty: {scenario.difficulty}
                    </span>
                </div>
            </div>

            <button className={styles.nextBtn} onClick={onNext}>
                Next Round →
            </button>
        </div>
    );
}
