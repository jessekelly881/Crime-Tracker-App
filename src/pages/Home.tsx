import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ReactMapboxGl from "react-mapbox-gl";
import mapboxStyle from './style.json';

type GeoLocation = [number, number];
const defaultCenter: GeoLocation = [-99.1332, 19.4326];

const BaseMap = ReactMapboxGl({
    accessToken: "pk.eyJ1Ijoic29tZWdyYXNzIiwiYSI6ImNqenFwbnJmNTBxb3czbm1pazdwOWo0ZzcifQ.r5yGF8JsDcbaQG-8tv6RRQ",
});

const Home: React.FunctionComponent = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar style={{height: "30px"}}>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <BaseMap center={defaultCenter} containerStyle={{height: "40vh", width: "100%"}} style={mapboxStyle}/>
      </IonContent>
    </>
  );
};

export default Home;
