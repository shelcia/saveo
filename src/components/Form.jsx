import React, { useEffect, useState } from "react";
import Inputs from "./Inputs";

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
      <div className="bg-darkblue  px-2">
        <div className="row m-0">
          <div className="col-sm-6 pt-4 pb-5">
            <form>
              <div className="row">
                <Inputs title="Location" handleInputs={handleInputs} />
                <Inputs title="Lattitude" handleInputs={handleInputs} />
                <Inputs title="Longitude" handleInputs={handleInputs} />
              </div>
            </form>
          </div>
          <div className="col-sm-6 d-flex justify-content-end align-items-center">
            {isDisabled ? (
              <button className="button-add disabled" disabled>
                Submit
              </button>
            ) : (
              <button className="button-add">Add</button>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Form;
