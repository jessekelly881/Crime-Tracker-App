import React from 'react';
import {IonImg, IonThumbnail, IonListHeader, IonList, IonContent, IonDatetime, IonItem, IonLabel, IonInput} from '@ionic/react';
import { Camera } from '@capacitor/core';
import { Plugins, CameraResultType } from '@capacitor/core';

async function takePicture() {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri
  });

  var imageUrl = image.webPath;

}

const Report: React.FC = () => {
  return (
      <IonContent>
          <IonItem style={{width:"100%", height:"35vh"}} color="medium" onClick={() => {takePicture()}}>
            <IonImg src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg"/>
          </IonItem>
          <IonList style={{padding: "0px"}}>
              <IonListHeader color="dark">
                  <IonLabel>
                      <h2>Details</h2>
                  </IonLabel>
              </IonListHeader>

              <IonItem>
                  <IonLabel>Name</IonLabel>
                  <IonInput />
              </IonItem>
              <IonItem>
                  <IonLabel>Date</IonLabel>
                  <IonDatetime placeholder="MM DD YY"></IonDatetime>
              </IonItem>
          </IonList>
      </IonContent>
  );
};

export default Report;
