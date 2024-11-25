// pages/Quizzes.tsx

import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonRouterLink } from '@ionic/react';
import Questions from '../../components/quiz/QuadraticEquationQuiz';

const QuadraticQuizzes: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <Questions />
            </IonContent>
        </IonPage>
    );
};

export default QuadraticQuizzes;
