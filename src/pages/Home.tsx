import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ReactMapboxGl from "react-mapbox-gl";
import mapboxStyle from './style.json';

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1Ijoic29tZWdyYXNzIiwiYSI6ImNqenFwbnJmNTBxb3czbm1pazdwOWo0ZzcifQ.r5yGF8JsDcbaQG-8tv6RRQ"
});

const Home: React.FunctionComponent = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CrimeWatch</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <Map containerStyle={{height: "30vh", width: "100%"}} style={mapboxStyle}/>
      </IonContent>
    </>
  );
};

export default Home;
