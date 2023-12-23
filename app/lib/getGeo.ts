"use client";
// import { useEffect, useState } from "react";

// export async function getGeoData() {
//   const [location, setLocation] = useState();

//   if(!location)
//     if ("geolocation" in navigator) {
//       // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
//       navigator.geolocation.getCurrentPosition((success) => {
//         setLocation(success.coords);
//       });
//     }

//   return location;
// }

import React, { useState, useEffect } from "react";

const getLocation = () => {
  // Initialize the state with a more specific type or null
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null);

  useEffect(() => {
    if (!location && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(position.coords);
      });
    }
  }, [location]); // Add location as a dependency
  console.log(location);

  return location;
};

export default getLocation;
