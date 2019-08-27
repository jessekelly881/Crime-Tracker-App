import React from 'react';
import {IonContent, IonToggle, IonList, IonItem, IonLabel} from '@ionic/react';

const Settings: React.FunctionComponent = () => {
  return (
      <IonContent>
          <IonList>
              <IonItem>
                  <IonLabel>Receive Alerts</IonLabel>
                  <IonToggle value="alert" onChange={() => {}} />
              </IonItem>
          </IonList>
      </IonContent>
  );
};

export default Settings;
