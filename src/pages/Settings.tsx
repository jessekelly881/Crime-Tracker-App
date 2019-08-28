import React from 'react';
import {IonInput, IonContent, IonToggle, IonListHeader, IonItem, IonLabel, IonList} from '@ionic/react';

const Settings: React.FC = () => {
  return (
      <IonContent>
          <IonList style={{padding: "0px"}}>

              <IonListHeader color="dark">
                  <IonLabel>
                      <h2>Personal Info</h2>
                  </IonLabel>
              </IonListHeader>
              <IonItem>
                  <IonLabel>Full Name</IonLabel>
                  <IonInput />
              </IonItem>
              <IonItem>
                  <IonLabel>Email</IonLabel>
                  <IonInput />
              </IonItem>
              <IonItem>
                  <IonLabel>Username</IonLabel>
                  <IonInput />
              </IonItem>

              <IonListHeader color="dark">
                  <IonLabel>
                      <h2>Notifications</h2>
                  </IonLabel>
              </IonListHeader>
              <IonItem>
                  <IonLabel>Receive Alerts</IonLabel>
                  <IonToggle value="alert" color="danger" onChange={() => {}} />
              </IonItem>

          </IonList>
      </IonContent>
  );
};

export default Settings;
