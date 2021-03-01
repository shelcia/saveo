import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Polyline } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};
const onLoad = (polyline) => {
  console.log("polyline: ", polyline);
};

const path = [
  { lat: 37.772, lng: -122.214 },
  { lat: 21.291, lng: -157.821 },
  { lat: -18.142, lng: 178.431 },
  { lat: -27.467, lng: 153.027 },
];

const options = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  paths: [
    { lat: 37.772, lng: -122.214 },
    { lat: 21.291, lng: -157.821 },
    { lat: -18.142, lng: 178.431 },
    { lat: -27.467, lng: 153.027 },
  ],
  zIndex: 1,
};
const Map = () => {
  return (
    <React.Fragment>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Polyline onLoad={onLoad} path={path} options={options} />
        </GoogleMap>
      </LoadScript>
    </React.Fragment>
  );
};

export default Map;
