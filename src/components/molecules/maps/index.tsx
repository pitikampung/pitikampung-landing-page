"use client";

import classNames from "clsx";
import Feature from "ol/Feature";
import Map from "ol/Map";
import View from "ol/View";
import Point from "ol/geom/Point";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import "ol/ol.css";
import { fromLonLat } from "ol/proj";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import Icon from "ol/style/Icon";
import Style from "ol/style/Style";
import { useEffect, useRef } from "react";
import { MapsProps } from "./maps";

export const Maps = ({
  position = [-7.449554, 112.711726],
  zoom = 10,
  className,
}: MapsProps) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([position[1], position[0]]),
        zoom,
      }),
    });

    const marker = new Feature({
      geometry: new Point(fromLonLat([position[1], position[0]])),
    });

    marker.setStyle(
      new Style({
        image: new Icon({
          src: "https://openlayers.org/en/latest/examples/data/icon.png",
          anchor: [0.5, 1],
          scale: 1,
        }),
      })
    );

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [marker],
      }),
    });

    map.addLayer(vectorLayer);

    return () => map.setTarget(undefined);
  }, [position, zoom]);

  return (
    <div
      ref={mapRef}
      className={classNames([
        "w-full h-[400px] rounded-xl overflow-hidden shadow-md",
        className,
      ])}
    />
  );
};
