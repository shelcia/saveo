import React, { useContext } from "react";
import { LocationContext } from "./LocationContext";

const Home = () => {
  const [locations, setLocations] = useContext(LocationContext);

  const reset = (e) => {
    console.log(locations);
    e.preventDefault();
    setLocations([]);
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm fixed-top">
        <span className="navbar-brand">
          <button onClick={(e) => reset(e)}>Home</button>
        </span>
      </nav>
    </React.Fragment>
  );
};

export default Home;
