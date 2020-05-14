//import configMapToken from "../utils/configMapToken"
import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker, geocoder} from "react-map-gl"

export default function MapView(props){
    const [viewport, setViewport] = useState({latitude: 34.412, longitude: -119.8573, width: "100vw", height: "100vh", zoom: 15.5});
    
    return(
        <div>
            <ReactMapGL 
                {...viewport} 
                mapboxApiAccessToken={"pk.eyJ1Ijoic2V0aHZhbmIiLCJhIjoiY2thNjhtOGh4MDVtODJzbW5jbHV1cmc3aiJ9.uXYwbhfNVaCx8_plHRewUg"}
                mapStyle="mapbox://styles/sethvanb/cka744x8c16b31ilhulkr0d26"
                onViewportChange = {viewport => {setViewport(viewport);}}
             >
            {/*<div> 
                var house_coordinates;
                geocoding.forwardGeocode({
                    query: "6666 Del Playa Dr.",
                    latitude: house_coordinates.lat,
                    longitude: house_coordinates.lng
                })
            </div>
             {props.list.address.map(house => (
                <Marker key={house} latitude={parkgeometry}>
                    <div>HOUSE</div>
                </Marker>
            ))} */}
            </ReactMapGL>
        </div>
    )
}