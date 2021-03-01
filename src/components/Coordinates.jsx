import React from "react";

const Coordinates = () => {
  return (
    <React.Fragment>
      <div className="col-sm-6 bg-lightblue p-4 d-flex justify-content-between flex-column">
        <div>
          <h6 className="font-weight-bold text-uppercase text-darkblue">
            All Co-ordinates:
          </h6>
          <table className="table table-borderless"></table>
        </div>
        <button className="button-route">Show Route</button>
      </div>
    </React.Fragment>
  );
};

export default Coordinates;
