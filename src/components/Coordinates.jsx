import React, { useContext, useState, useEffect } from "react";
import { LocationContext } from "./LocationContext";

const Coordinates = () => {
  const [locations] = useContext(LocationContext);
  const [isDisabled, setDisabled] = useState(true);

  useEffect(() => {
    const handleDisable = () => {
      if (locations.length < 2) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    };
    handleDisable();
  }, [locations]);

  return (
    <React.Fragment>
      <div className="col-sm-6 bg-lightblue p-4 d-flex justify-content-between flex-column">
        <div>
          <h6 className="font-weight-bold text-uppercase text-darkblue">
            All Co-ordinates:
          </h6>
          <table className="table table-borderless">
            <thead>
              <tr>
                <th className="px-0 font-weight-light text-darkblue">
                  My Co-ordinates
                </th>
                <th className="text-grey text-uppercase">Default</th>
                <th className="text-grey text-uppercase">Default</th>
              </tr>
            </thead>
            <tbody>
              {locations.map((location, index) => (
                <tr key={index}>
                  <td className="text-darkblue">
                    {index + 1}
                    {`)`} {location.Location}
                  </td>
                  <td className="text-darkblue">{location.Lattitude}</td>
                  <td className="text-darkblue">{location.Longitude}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {isDisabled ? (
          <button className="button-route disabled" disabled>
            Show Route
          </button>
        ) : (
          <button className="button-route">Show Route</button>
        )}
      </div>
    </React.Fragment>
  );
};

export default Coordinates;
