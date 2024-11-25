// pages/Quizzes.tsx

import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonRouterLink } from '@ionic/react';

const Quizzes: React.FC = () => {
    return (
        <IonPage>
            <IonContent className="ion-padding">
                {/* Title at the top */}
                <h1 className="page-title">Quizzes</h1>

                {/* Card with Quizzes Title */}
                <IonCard>
                    <IonRouterLink routerLink="/quadraticQuizzes">
                        <IonCardContent>
                            {/* Content of the card can go here */}
                            <p className="lesson-content">Quadratic Equation Quiz</p>
                        </IonCardContent>
                    </IonRouterLink>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Quizzes;
