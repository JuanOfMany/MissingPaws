import React, { useRef, useEffect } from 'react';
import WebMap from "@arcgis/core/WebMap.js";

export default function MapView () {
  const mapRef = useRef();

  useEffect(
    () => {},
    []
  );

  return <div ref={mapRef} />;
}