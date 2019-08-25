import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Home: React.FunctionComponent = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CrimeWatch</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
          Content
      </IonContent>
    </>
  );
};

export default Home;
