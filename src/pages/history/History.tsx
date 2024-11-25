// pages/History.tsx

import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';
import { Activity } from '../../types/activity';
import { getActivities, clearActivities } from '../../utils/ActivityStorage';
const History: React.FC = () => {
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        const fetchedActivities = getActivities();
        // Sort activities by timestamp descending
        const sortedActivities = fetchedActivities.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
        setActivities(sortedActivities);
    }, []);

    const handleClearHistory = () => {
        clearActivities();
        setActivities([]);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className="custom-header-toolbar">
                    <img src="/assets/img/header.png" alt="Fun Learning" className="header-image" />
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {/* Title at the top */}
                <h1 className="page-title">History</h1>

                {/* Check if there are activities */}
                {activities.length === 0 ? (
                    <p className="lesson-content">No history available.</p>
                ) : (
                    <>
                        {activities.map(activity => (
                            <IonCard key={activity.id} className="history-card">
                                <IonCardHeader>
                                    <IonCardTitle>{activity.type}</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <p><strong>Title:</strong> {activity.title}</p>
                                    <p><strong>Timestamp:</strong> {new Date(activity.timestamp).toLocaleString()}</p>
                                </IonCardContent>
                            </IonCard>
                        ))}

                        <IonButton color="danger" onClick={handleClearHistory}>
                            Clear History
                        </IonButton>
                    </>
                )}
            </IonContent>
        </IonPage>
    );
};

export default History;
