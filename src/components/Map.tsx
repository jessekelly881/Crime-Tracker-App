import React from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import mapboxStyle from '../misc/mapbox/style.json';

const mapboxApiKey = "pk.eyJ1Ijoic29tZWdyYXNzIiwiYSI6ImNqenFwbnJmNTBxb3czbm1pazdwOWo0ZzcifQ.r5yGF8JsDcbaQG-8tv6RRQ";

type GeoLocation = [number, number];


interface EventsLayerProps{
    points: GeoLocation[];
}

const EventsLayer: React.FC<EventsLayerProps> = ({points}) => {
    const paint =  {'circle-radius': 20, 'circle-color': '#aa0000', 'circle-opacity': 0.4}

    return (
        <Layer type="circle" id="marker" paint={paint}>
            { points.map( (point, i) => {
                return (<Feature coordinates={point} />);
            }) }
        </Layer>
    )
}

interface CurrentLocationLayerProps{
    location: GeoLocation;
}

const CurrentLocationLayer: React.FC<CurrentLocationLayerProps> = (props) => {
    const paint =  {'circle-radius': 4, 'circle-color': 'white', 'circle-opacity': 1}
    return (
        <Layer type="circle" id="marker" paint={paint}>
            <Feature coordinates={props.location} />
        </Layer>
    )
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
              <EventsLayer points={[props.center]} />
          </BaseMap>
    );
}

export default Map;
