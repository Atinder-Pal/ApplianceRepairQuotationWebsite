import React from "react";
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";


function Maap(){
    return(
        <GoogleMap 
        defaultZoom={10} 
        defaultCenter={{lat: 51.047310, lng: -114.057968}}
        />
    );
}
const WrappedMap = withScriptjs(withGoogleMap(Maap));

export default function Map() {
    return (
    <div style={{width:'70vm', height: '70vh'}}>
        <WrappedMap 
        googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'} 
        
        loadingElement={<div style={{height: "100%"}}/>}
        containerElement={<div style={{height: "100%"}}/>}
        mapElement={<div style={{height: "100%"}}/>}
        />
    </div>
    );
}