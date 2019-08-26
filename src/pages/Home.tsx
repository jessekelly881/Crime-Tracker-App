import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import { Marker } from "react-mapbox-gl";
import mapboxStyle from './style.json';


type GeoLocation = [number, number];
const defaultCenter: GeoLocation = [-99.1332, 19.4326];

const BaseMap = ReactMapboxGl({
    accessToken: "pk.eyJ1Ijoic29tZWdyYXNzIiwiYSI6ImNqenFwbnJmNTBxb3czbm1pazdwOWo0ZzcifQ.r5yGF8JsDcbaQG-8tv6RRQ",
});

const TrackerMap: React.FunctionComponent = (props) => {
    return (
          <BaseMap center={defaultCenter} containerStyle={{height: "40vh", width: "100%"}} style={mapboxStyle}>
              <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                  <Feature coordinates={defaultCenter} />
              </Layer>
          </BaseMap>
    );
}

const Home: React.FunctionComponent = () => {
  return (
    <>
      <IonContent class="content">
          <TrackerMap />
      </IonContent>
    </>
  );
};

export default Home;
