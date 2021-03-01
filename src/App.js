import React from "react";
import Coordinates from "./components/Coordinates";
import Form from "./components/Form";
import Map from "./components/Map";
import "./styles/style.css";

const App = () => {
  return (
    <React.Fragment>
      <div className="container-fluid background d-flex justify-content-center align-items-center">
        <div className="card border border-0">
          <div className="card-body p-0">
            <Form />
            <div className="row border p-0 m-0">
              <Coordinates />
              <div className="col-sm-6 bg-primary">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
