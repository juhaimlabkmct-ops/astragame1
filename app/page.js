'use client';

import { useState } from 'react';
import { generateScenario } from '../lib/scenarioGenerator';
import MessageDisplay from '../components/MessageDisplay';
import GameControls from '../components/GameControls';
import FeedbackPanel from '../components/FeedbackPanel';
import ScoreBoard from '../components/ScoreBoard';
import styles from './page.module.css';

export default function Home() {
    const [currentScenario, setCurrentScenario] = useState(generateScenario());
    const [showFeedback, setShowFeedback] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [score, setScore] = useState(0);
    const [totalRounds, setTotalRounds] = useState(0);
    const [streak, setStreak] = useState(0);

    const handleAnswer = (userThinkIsPhish) => {
        const correct = userThinkIsPhish === currentScenario.isPhish;
        setIsCorrect(correct);
        setShowFeedback(true);
        setTotalRounds(prev => prev + 1);

        if (correct) {
            setScore(prev => prev + 1);
            setStreak(prev => prev + 1);
        } else {
            setStreak(0);
        }
    };

    const handleNext = () => {
        setCurrentScenario(generateScenario());
        setShowFeedback(false);
    };

    const handleReset = () => {
        setCurrentScenario(generateScenario());
        setShowFeedback(false);
        setScore(0);
        setTotalRounds(0);
        setStreak(0);
    };

    return (
        <main className={styles.main}>
            <div className="container">
                <header className={styles.header}>
                    <h1 className={styles.title}>
                        🎣 Phish-Me-Not
                    </h1>
                    <p className={styles.subtitle}>
                        Can you spot the phish? Test your cybersecurity skills!
                    </p>
                </header>

                <ScoreBoard
                    score={score}
                    totalRounds={totalRounds}
                    streak={streak}
                />

                {!showFeedback ? (
                    <>
                        <MessageDisplay scenario={currentScenario} />
                        <GameControls onAnswer={handleAnswer} disabled={showFeedback} />
                    </>
                ) : (
                    <FeedbackPanel
                        isCorrect={isCorrect}
                        scenario={currentScenario}
                        onNext={handleNext}
                    />
                )}

                {totalRounds > 0 && (
                    <div className={styles.resetSection}>
                        <button className={styles.resetBtn} onClick={handleReset}>
                            🔄 Reset Game
                        </button>
                    </div>
                )}

                <footer className={styles.footer}>
                    <p>Stay vigilant! Real organizations rarely ask for sensitive info via email. 🔒</p>
                </footer>
            </div>
        </main>
    );
}
