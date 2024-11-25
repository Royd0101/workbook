import React, { useEffect, useState } from 'react';
import { IonHeader, IonToolbar, IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import './Score.css';

interface QuizScore {
    title: string;
    score: number;
    maxScore: number;
}

const Score: React.FC = () => {
    const [scores, setScores] = useState<QuizScore[]>([]);

    // Load scores from localStorage
    useEffect(() => {
        const savedScores: QuizScore[] = JSON.parse(localStorage.getItem('quizScores') || '[]');
        // Keep only the latest 10 scores and reverse the array
        setScores(savedScores.slice(-10).reverse());
    }, []);

    return (
        <IonPage>

            <IonHeader>
                <IonToolbar className="custom-header-toolbar">
                    <img src="/assets/img/header.png" alt="Fun Learning" className="header-image" />
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <h1 className="page-title">Score List</h1>
                <div className="sticky-score-list">
                    {scores.length > 0 ? (
                        <div className="score-container">
                            {scores.map((scoreEntry, index) => (
                                <IonCard key={index} style={{ marginBottom: '20px' }}>
                                    <IonCardHeader>
                                        <IonCardTitle>{scoreEntry.title}</IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        Score: {scoreEntry.score} / {scoreEntry.maxScore}
                                    </IonCardContent>
                                </IonCard>
                            ))}
                        </div>
                    ) : (
                        <p>No scores available.</p>
                    )}
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Score;
