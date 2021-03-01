import React, { useContext, useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Polyline } from "@react-google-maps/api";
import { LocationContext } from "./LocationContext";
import { Marker } from "@react-google-maps/api";

const Map = () => {
  const [path, setPath] = useState([
    { lat: 37.772, lng: -122.214 },
    { lat: 21.291, lng: -157.821 },
    { lat: -18.142, lng: 178.431 },
    { lat: -27.467, lng: 153.027 },
  ]);

  const [locations] = useContext(LocationContext);

  useEffect(() => {
    const createPath = () => {
      console.log(locations);
      const newPath = locations.map((location) => ({
        lat: parseFloat(location.Lattitude),
        lng: parseFloat(location.Longitude),
      }));
      console.log(newPath);
      setPath(newPath);
    };
    createPath();
  }, [locations]);

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
