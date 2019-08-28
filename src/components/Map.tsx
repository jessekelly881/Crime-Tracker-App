import React, { useState } from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import mapboxStyle from '../misc/mapbox/style.json';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

const mapboxApiKey = "pk.eyJ1Ijoic29tZWdyYXNzIiwiYSI6ImNqenFwbnJmNTBxb3czbm1pazdwOWo0ZzcifQ.r5yGF8JsDcbaQG-8tv6RRQ";

type GeoLocation = [number, number];
const defaultCenter: GeoLocation = [-99.1332, 19.4326];

interface EventsLayerProps{
    points: GeoLocation[];
}

const EventsLayer: React.FC<EventsLayerProps> = ({points}) => {
    const paint =  {'circle-radius': 20, 'circle-color': '#aa0000', 'circle-opacity': 0.4}

    return (
        <Layer type="circle" id="eventsLayer" paint={paint}>
            {

            points.map( (point, i) => {
                return (<Feature coordinates={point} />);
            })

            }
        </Layer>
    )
}

const CurrentLocationLayer: React.FC = () => {
    const [location, setLocation] = useState();
    const paint =  {'circle-radius': 4, 'circle-color': 'blue', 'circle-opacity': 1}

    const wait = Geolocation.watchPosition({}, (position, err) => {
        if(position){
             setLocation([position.coords.longitude, position.coords.latitude]);
        }
    })

    if(location){ //Location Known
        return (
            <Layer type="circle" id="currentLocationLayer" paint={paint}>
                <Feature coordinates={location} />
            </Layer>
        )
    }

    else{
        return (<> </>)
    }

}


interface MapProps{
    center: GeoLocation;
}

const Map: React.FC<MapProps> = (props) => {

    const containerStyle = {height: "40vh", width: "100%"};

    const BaseMap = ReactMapboxGl({
        accessToken: mapboxApiKey,
    });

    return (
          <BaseMap center={props.center} containerStyle={containerStyle} style={mapboxStyle}>
              <CurrentLocationLayer />
              <EventsLayer points={[props.center]} />
          </BaseMap>
    );
}

export default Map;
