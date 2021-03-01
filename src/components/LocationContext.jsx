import React, { createContext, useState } from "react";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({
    Lattitude: "",
    Location: "",
    Longitude: "",
  });
  return (
    <LocationContext.Provider value={[location, setLocation]}>
      {children}
    </LocationContext.Provider>
  );
};
