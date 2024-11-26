import { IonContent, IonHeader, IonPage, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardTitle, IonCardContent, IonRouterLink, IonIcon } from '@ionic/react';
import './Home.css';
import { useHistory } from 'react-router-dom';
import { checkmarkCircle, globe } from 'ionicons/icons';
import { Activity, ActivityType } from '../types/activity';
import { addActivity } from '../utils/ActivityStorage';

const Home: React.FC = () => {
  const history = useHistory();

  const handleClick = (path: string, title: string, type: ActivityType) => {
    history.push(path);
    history.go(0); // This will reload the current page

    // Create a new activity object
    const newActivity: Activity = {
      id: Date.now(),
      type,
      title,
      timestamp: new Date().toISOString(),
    };

    // Save the activity
    addActivity(newActivity);
  };

  return (
    <IonPage className="ion-page">
      {/* Header with Image */}
      <IonHeader>
        <IonToolbar className="custom-header-toolbar">
          <img src="/assets/img/header.png" alt="Fun Learning" className="header-image" />
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-content ion-padding">
        {/* Title Card */}
        <IonCardTitle className="ion-card-title title-text">CONTENT</IonCardTitle>

        <IonGrid className="content-grid ion-align-items-center ion-justify-content-center">
          {/* Lesson Cards */}
          <IonCard
            className="lesson-card yellow-card"
            onClick={() => handleClick('/quadraticEquation', 'Characterizing the roots of a Quadratic Equation using the Discriminant. (M9AL-Ic-1)', 'Lesson View')}
          >
            <IonCardContent>
              <p className="lesson-content">Characterizing the roots of a Quadratic Equation using the Discriminant. (M9AL-Ic-1)</p>
            </IonCardContent>
          </IonCard>

          <div className="interactive-quiz-wrapper">
            <IonRouterLink routerLink="/quadraticQuizzes">
              <p className="interactive-quiz" onClick={() => handleClick('/quadraticQuizzes', 'Characterizing the roots of a Quadratic Equation Quiz', 'Quiz Taken')}>Interactive Quiz</p>
            </IonRouterLink>
          </div>

          {/* Repeat similar changes for other lesson cards */}
          <IonCard
            className="lesson-card red-card"
            onClick={() => handleClick('/anotherLessonPath', 'Describing the Relationship between the coefficients and the sum and product of the roots of a Quadratic Equation. (M9AL-Ic-2)', 'Lesson View')}
          >
            <IonCardContent>
              <p className="lesson-content">Describing the Relationship between the coefficients and the sum and product of the roots of a Quadratic Equation. (M9AL-Ic-2)</p>
            </IonCardContent>
          </IonCard>

          <div className="interactive-quiz-wrapper">
            <p className="interactive-quiz">Interactive Quiz</p>
          </div>

          <IonCard className="lesson-card green-card">
            <IonCardContent>
              <p className="lesson-content">Analyzing the effects of changing the values of a, h, and k in the equation y = a(x – h)² + k of a quadratic function on its graph. (M9AL-Ii-2)</p>
            </IonCardContent>
          </IonCard>

          <div className="interactive-quiz-wrapper">
            <p className="interactive-quiz">Interactive Quiz</p>
          </div>

          <IonCard className="lesson-card blue-card">
            <IonCardContent>
              <p className="lesson-content">Solving problems involving quadratic functions</p>
            </IonCardContent>
          </IonCard>

          <div className="interactive-quiz-wrapper">
            <p className="interactive-quiz">Interactive Quiz</p>
          </div>

          <IonRow className="ion-justify-content-center ion-align-items-center bottom-row">
            <IonCol size="6" sizeSm="4">
              <IonRouterLink routerLink="/score">
                <IonCard className="custom-card score-card">
                  <div className="card-icon">
                    <IonIcon icon={checkmarkCircle} size="large" /> {/* Checkmark icon */}
                  </div>
                  <p className="card-text">SCORES</p>
                </IonCard>
              </IonRouterLink>
            </IonCol>

            <IonCol size="6" sizeSm="4">
              <IonRouterLink routerLink="/history">
                <IonCard className="custom-card history-card">
                  <div className="card-icon">
                    <IonIcon icon={globe} size="large" /> {/* Globe icon */}
                  </div>
                  <p className="card-text">HISTORY</p>
                </IonCard>
              </IonRouterLink>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
