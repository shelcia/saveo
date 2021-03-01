import React, { useContext } from "react";
import { LocationContext } from "./LocationContext";

const Coordinates = () => {
  const [location] = useContext(LocationContext);
  return (
    <React.Fragment>
      <div className="col-sm-6 bg-lightblue p-4 d-flex justify-content-between flex-column">
        <div>
          <h6 className="font-weight-bold text-uppercase text-darkblue">
            All Co-ordinates:
          </h6>
          <table className="table table-borderless">
            <thead>
              <th className="px-0 font-weight-light text-darkblue">
                My Co-ordinates
              </th>
              <th className="text-grey text-uppercase">Default</th>
              <th className="text-grey text-uppercase">Default</th>
            </thead>
            <tbody>
              {location.map((location, index) => (
                <tr>
                  <td>
                    {index}
                    {`)`} {location.Location}
                  </td>
                  <td>{location.Lattitude}</td>
                  <td>{location.Longitude}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="button-route">Show Route</button>
      </div>
    </React.Fragment>
  );
};

export default Coordinates;
