import React from "react";
import Inputs from "./Inputs";

const Form = () => {
  return (
    <React.Fragment>
      <div className="bg-darkblue pt-4 pb-5 px-2">
        <div className="row m-0">
          <div className="col-sm-6">
            <form>
              <div className="row">
                <Inputs title="Location" />
                <Inputs title="Lattitude" />
                <Inputs title="Longitude" />
              </div>
            </form>
          </div>
          <div className="col-sm-6 d-flex justify-content-center align-items-center">
            <button className="button-add">Sumbit</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Form;
