import React, { useRef, useEffect } from 'react';
import EsriMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol.js";
import Graphic from '@arcgis/core/Graphic';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';

export default function App() {

  const map = new EsriMap({
    basemap: "streets-vector"
  });

  const view = new MapView({
    map: map,
    container: "viewDiv",
    center: [-80.296, 25.984],
    zoom: 12
  });

  let symbol = {
    type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
    style: "circle",
    color: [30,	144, 255, 0.3],
    size: "25px",  // pixels
    outline: {  // autocasts as new SimpleLineSymbol()
      width: 0.5  // points
    }
  };

  const point = { //Create a point
    type: "point",
    longitude: -80.296,
    latitude: 25.984
 };

  const graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);

  const pointGraphic = new Graphic({
    geometry: point,
    symbol: symbol
  });

  graphicsLayer.add(pointGraphic);

  return (
    <div id="map">My app</div>
  )
}