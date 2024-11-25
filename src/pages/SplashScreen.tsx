import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { IonContent, IonPage } from '@ionic/react';
import './SplashScreen.css';

const SplashScreen: React.FC = () => {
    const history = useHistory();

    useEffect(() => {
        // Redirect to home page after 2 seconds
        const timer = setTimeout(() => {
            history.push('/home');
        }, 3000); // 3000ms = 3 seconds

        return () => clearTimeout(timer); // Clear timeout if component is unmounted
    }, [history]);

    return (
        <IonPage>
            <IonContent className="splash-screen-content">
                <img src="/assets/img/splashscreen.png" alt="Splash Image" className="splash-image" />
            </IonContent>
        </IonPage>
    );
};

export default SplashScreen;
