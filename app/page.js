'use client';

import Image from 'next/image';
import { useState } from 'react';
import { generateScenario } from '../lib/scenarioGenerator';
import MessageDisplay from '../components/MessageDisplay';
import GameControls from '../components/GameControls';
import FeedbackPanel from '../components/FeedbackPanel';
import ScoreBoard from '../components/ScoreBoard';
import TiltCard from '../components/TiltCard';
import CursorBlink from '../components/CursorBlink';
import styles from './page.module.css';

export default function Home() {
    const [currentScenario, setCurrentScenario] = useState(generateScenario());
    const [showFeedback, setShowFeedback] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [score, setScore] = useState(0);
    const [totalRounds, setTotalRounds] = useState(0);
    const [streak, setStreak] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const MAX_ROUNDS = 15;

    const handleAnswer = (userThinkIsPhish) => {
        const correct = userThinkIsPhish === currentScenario.isPhish;
        setIsCorrect(correct);
        setShowFeedback(true);

        if (correct) {
            setScore(prev => prev + 1);
            setStreak(prev => prev + 1);
        } else {
            setStreak(0);
        }
    };

    const handleNext = () => {
        const nextRound = totalRounds + 1;
        setTotalRounds(nextRound);

        if (nextRound >= MAX_ROUNDS) {
            setGameOver(true);
            setShowFeedback(false);
        } else {
            setCurrentScenario(generateScenario());
            setShowFeedback(false);
        }
    };

    const handleReset = () => {
        setCurrentScenario(generateScenario());
        setShowFeedback(false);
        setIsCorrect(false);
        setScore(0);
        setTotalRounds(0);
        setStreak(0);
        setGameOver(false);
    };

    const getGrade = () => {
        const percentage = (score / MAX_ROUNDS) * 100;
        if (percentage === 100) return { rank: 'S', title: 'Cyber Guardian 🛡️', color: '#ffd700' };
        if (percentage >= 90) return { rank: 'A', title: 'Security Expert 👮‍♂️', color: '#00ff9d' };
        if (percentage >= 80) return { rank: 'B', title: 'Vigilant User 👀', color: '#2d9cf5' };
        if (percentage >= 60) return { rank: 'C', title: 'Risk Prone ⚠️', color: '#f59e0b' };
        return { rank: 'D', title: 'Easy Target 🎯', color: '#ff3860' };
    };

    const grade = getGrade();

    return (
        <main className={styles.main}>
            <CursorBlink />
            <div className="container">
                <header className={styles.header}>
                    <div className={styles.logoContainer}>
                        <Image
                            src="/logo.png"
                            alt="Association Logo"
                            width={120}
                            height={120}
                            className={styles.logo}
                            priority
                        />
                    </div>
                    <h1 className={styles.title}>
                        🎣 Phish-Me-Not
                    </h1>
                    <p className={styles.subtitle}>
                        {gameOver ? 'Mission Complete!' : 'Can you spot the phish? Test your cybersecurity skills!'}
                    </p>
                </header>

                {!gameOver ? (
                    <>
                        <TiltCard>
                            <ScoreBoard
                                score={score}
                                totalRounds={totalRounds}
                                streak={streak}
                            />
                        </TiltCard>

                        {!showFeedback ? (
                            <>
                                <div className={styles.roundIndicator}>Question {totalRounds + 1} of {MAX_ROUNDS}</div>
                                <TiltCard>
                                    <MessageDisplay scenario={currentScenario} />
                                </TiltCard>
                                <GameControls onAnswer={handleAnswer} disabled={showFeedback} />
                            </>
                        ) : (
                            <TiltCard>
                                <FeedbackPanel
                                    isCorrect={isCorrect}
                                    scenario={currentScenario}
                                    onNext={handleNext}
                                />
                            </TiltCard>
                        )}

                        <div className={styles.resetSection}>
                            <button className={styles.resetBtn} onClick={handleReset}>
                                🔄 Start Over
                            </button>
                        </div>
                    </>
                ) : (
                    <TiltCard>
                        <div className={`${styles.results} glass fade-in`}>
                            <h2>Training Complete</h2>

                            <div className={styles.logoContainer}>
                                <Image
                                    src="/logo.png"
                                    alt="Association Logo"
                                    width={100}
                                    height={100}
                                    className={styles.logo}
                                />
                            </div>

                            <div className={styles.finalScore}>
                                <div className={styles.rankBadge} style={{ borderColor: grade.color }}>
                                    <span style={{ color: grade.color }}>{grade.rank}</span>
                                </div>
                                <div className={styles.scoreDetails}>
                                    <h3 style={{ color: grade.color }}>{grade.title}</h3>
                                    <p>You spotted <strong>{score}</strong> out of <strong>{MAX_ROUNDS}</strong> threats.</p>
                                    <p className={styles.accuracy}>Accuracy: {Math.round((score / MAX_ROUNDS) * 100)}%</p>
                                </div>
                            </div>

                            <div className={styles.resultActions}>
                                <button className={styles.restartBtn} onClick={handleReset}>
                                    🔄 Play Again
                                </button>
                            </div>
                        </div>
                    </TiltCard>
                )}

                <footer className={styles.footer}>
                    <p>Stay vigilant! Real organizations rarely ask for sensitive info via email. 🔒</p>
                </footer>
            </div>
        </main>
    );
}
