import { IonText, IonItemSliding, IonItemOption, IonItemOptions, IonList, IonRefresher, IonRefresherContent, IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { RefresherEventDetail } from '@ionic/core';
import { Geolocation} from '@capacitor/core';
import Map from '../components/Map';

type GeoLocation = [number, number];
const defaultCenter: GeoLocation = [-99.1332, 19.4326];

function doRefresh(event: CustomEvent<RefresherEventDetail>) {
    console.log('Begin async operation');

    setTimeout(() => {
        console.log('Async operation has ended');
        event.detail.complete();
    }, 1000);
}

const Refresher: React.FC = () => {
    return (
        <IonRefresher onIonRefresh={doRefresh}>
            <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
    )

}

interface EventItemProps{
    title: string;
}

const EventItem: React.FC<EventItemProps> = (props) => {
    return (
        <IonItemSliding style={{marginTop: '10px'}}>
            <IonItemOptions side="start">
                <IonItemOption color="danger" onClick={() => console.log('share clicked')}>Remove</IonItemOption>
            </IonItemOptions>
            <IonItem color="dark" detail>
                <IonLabel text-wrap>
                    <IonText>
                      <h1>{props.title}</h1>
                    </IonText>
                      <p>17th Street, 60625</p>
                    <IonText>
                      <p>Published by: Jesse</p>
                    </IonText>
                </IonLabel>
            </IonItem>
        </IonItemSliding>
    )
}


const Home: React.FC = () => {
  return (
    <>
      <IonContent color="medium">
          <Refresher />
          <Map center={defaultCenter} />
          <EventItem title="Robery"/>
      </IonContent>
    </>
  );
};

export default Home;
