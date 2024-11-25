import React from 'react';
import { IonContent, IonPage, IonCard, IonCardContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Lesson.css'; // Import the CSS file if needed

const Lessons: React.FC = () => {
    const history = useHistory();

    const handleClick = (path: string) => {
        history.push(path);
        // Reload the page by redirecting to the same path
        history.go(0); // This will reload the current page
    };

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <h1 className="page-title">Lesson</h1>

                <IonCard onClick={() => handleClick('/quadraticEquation')}>
                    <IonCardContent>
                        <p className="lesson-content">Characterizing the roots of a Quadratic Equation using the Discriminant</p>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Lessons;
