import { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import useGameSound from '../hooks/useGameSound';
import styles from './FeedbackPanel.module.css';

export default function FeedbackPanel({
    isCorrect,
    scenario,
    onNext
}) {
    const { playSound } = useGameSound();

    useEffect(() => {
        if (isCorrect) {
            playSound('correct-complex');
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#00ff9d', '#2d9cf5', '#ffffff']
            });
        } else {
            playSound('wrong');
        }
    }, [isCorrect, playSound]);

    if (!scenario) return null;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className={`${styles.feedback} ${isCorrect ? styles.correct : styles.incorrect}`}
        >
            <div className={styles.result}>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: isCorrect ? [0, -10, 10, 0] : 0 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className={styles.emoji}
                >
                    {isCorrect ? '🎉' : '💀'}
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    {isCorrect ? "Excellent Work!" : "You've Been Hacked!"}
                </motion.h2>
            </div>

            <div className={styles.explanation}>
                <p className={styles.rebuttal}>{scenario.funnyRebuttal}</p>

                <div className={styles.details}>
                    <h3>🔍 Analysis:</h3>
                    <ul>
                        {scenario.clues.map((clue, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + (index * 0.1) }}
                            >
                                {clue}
                            </motion.li>
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
        </motion.div>
    );
}
