import React from "react";
import Coordinates from "./components/Coordinates";
import Form from "./components/Form";
import Home from "./components/Home";
import { LocationProvider } from "./components/LocationContext";
import Map from "./components/Map";
import "./styles/style.css";

const App = () => {
  return (
    <LocationProvider>
      <Home />
      <div className="container-fluid background d-flex justify-content-center align-items-center">
        <div className="card border border-0">
          <div className="card-body p-0">
            <Form />
            <div className="row  p-0 m-0">
              <Coordinates />
              <Map />
            </div>
          </div>
        </div>
      </div>
    </LocationProvider>
  );
};

export default App;
