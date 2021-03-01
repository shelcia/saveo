import React, { useContext } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Polyline } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import { PathContext } from "./PathContext";

const Map = () => {
  const [path] = useContext(PathContext);

  const containerStyle = {
    width: "100%",
    minHeight: "400px",
    borderBottomRightRadius: "2rem",
  };

  const center = {
    lat: 13.0827,
    lng: 80.2707,
  };
  const onLoad = (polyline) => {
    console.log("polyline: ", polyline);
  };

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
    paths: path,
    zIndex: 1,
  };
  return (
    <div className="col-sm-6 p-0">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Polyline onLoad={onLoad} path={path} options={options} />
          {path.map((path, index) => (
            <Marker key={index} onLoad={onLoad} position={path} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
