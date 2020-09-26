import React, { useState } from "react";
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps";
import styles from '../ContactUs/Map.module.css';

//========= Fake JSON call data loacation Start ==========//
function getJSONMarkers() 
{
    const markers = 
    [
      {name:  "AM Calgary Office", location: [51.120751, -114.010572], phone: "+1(403)973-8894"},
      {name: "AM Edmonton Office", location: [53.535411, -113.507996], phone: "+1(780)555-5555"},
      {name: "AM Moscow Office", location: [55.7504461, 37.6174943], phone: "+7(916)777-7777"},
      {name: "AM RedDeer Office", location: [52.269838, -113.818359], phone: "+1(560)444-4444"},
      {name: "AM Banff Office", location: [51.1777781, -115.5682504], phone: "+1(403)333-3333"}
    ];
    return markers;
  }

//========== Fake JSON call Data ends =========//

function Maap(){
    // Hook
    const [selectedOffice, setSelectedOffice] = useState(null);

    // return map which starts at clagary with 5 pins to show office locations
    return(
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat: 51.047310, lng: -114.057968}}
        >
            {getJSONMarkers().map((office) => (
                <Marker 
                    key={office.name}
                    position={{
                        lat:office.location[0],
                        lng:office.location[1],
                    }}
                    // add Event for display info message on pins. when selected marker set.
                    onClick={() => {
                        setSelectedOffice(office);
                    }}
                />
            ))}
            {selectedOffice && (
                <InfoWindow
                    position={{
                        lat: selectedOffice.location[0],
                        lng: selectedOffice.location[1],
                    }}
                    onCloseClick={() => {
                        setSelectedOffice(null);
                    }}
                >
                        <div>
                            <h2>
                                {selectedOffice.name}
                            </h2>
                            <h3>
                                {selectedOffice.phone}
                            </h3>
                        </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}
// new WrappedMap variable has 2 things wrapped around it
// withScriptjs function (it helps to load Googlemap JS correctly) and withGoogleMap to 
// initialize the map. Then we pass our Maap function inside which we use to render our map
const WrappedMap = withScriptjs(withGoogleMap(Maap));
// For this map to work we also need API key assigned to this map. Its free if there are > ~28000 requests per month
export default function Map() {
    return (
    <div className={styles.backGround}>
        <div className={styles.borderMap} style={{width:'100vm', height: '100vh'}}>
            <WrappedMap 
            googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAzznb-EUNNuCWG0DVOqJekL0LOHSHp4CE'} 
            
            loadingElement={<div style={{height: "100%"}}/>}
            containerElement={<div style={{height: "100%"}}/>}
            mapElement={<div style={{height: "100%"}}/>}
            />
        </div>
    </div>
    );
}