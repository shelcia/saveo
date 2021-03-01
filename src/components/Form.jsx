import React, { useContext, useEffect, useState } from "react";
import Inputs from "./Inputs";
import { LocationContext } from "./LocationContext";
import swal from "sweetalert";

const Form = () => {
  const [location, setLocation] = useState({
    Lattitude: "",
    Location: "",
    Longitude: "",
  });
  const handleInputs = (e) => {
    setLocation({
      ...location,
      [e.target.name]: e.target.value,
    });
  };
  const [locations, setLocations] = useContext(LocationContext);

  const addLocation = (e) => {
    e.preventDefault();
    if (!isNaN(location.Location)) {
      swal("Enter Valid Place Name", ``, "warning");
      return;
    }
    if (location.Lattitude === "" || location.Longitude === "") {
      swal("Fill in both Lattitude and Longitude", ``, "warning");
      return;
    }
    if (isNaN(location.Lattitude) && isNaN(location.Longitude)) {
      swal("Lattitude and Longitude must be a decimal number", ``, "warning");
      return;
    }
    setLocations([...locations, location]);
    setLocation({
      Lattitude: "",
      Location: "",
      Longitude: "",
    });
  };

  const [isDisabled, setDisabled] = useState(true);

  useEffect(() => {
    const handleDisable = () => {
      if (location.Location === "") {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    };
    handleDisable();
  }, [location]);

  return (
    <React.Fragment>
      <div className="bg-darkblue rounded-top-lg px-2">
        <div className="row m-0">
          <div className="col-sm-6 pt-4 pb-5">
            <form>
              <div className="row">
                <Inputs
                  title="Location"
                  handleInputs={handleInputs}
                  value={location.Location}
                />
                <Inputs
                  title="Lattitude"
                  handleInputs={handleInputs}
                  value={location.Lattitude}
                />
                <Inputs
                  title="Longitude"
                  handleInputs={handleInputs}
                  value={location.Longitude}
                />
              </div>
            </form>
          </div>
          <div className="col-sm-6 d-flex justify-content-end align-items-center">
            {isDisabled ? (
              <button className="button-add disabled" disabled>
                Submit
              </button>
            ) : (
              <button className="button-add" onClick={(e) => addLocation(e)}>
                Add
              </button>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Form;
