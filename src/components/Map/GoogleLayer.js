// import * as React from 'react';
import * as L from 'leaflet';
import { createLayerComponent, updateGridLayer } from '@react-leaflet/core';
import 'leaflet.gridlayer.googlemutant';
import { Loader } from '@googlemaps/js-api-loader';

let googleMapsScriptLoaded = false;

const createLeafletElement = (props, context) => {
    const {
        apiKey = '',
        useGoogMapsLoader = true,
        googleMapsLoaderConf = {},
        googleMapsAddLayers,
        ...googleMutantProps
    } = props;
    if (useGoogMapsLoader && !googleMapsScriptLoaded) {
        const loader = new Loader({ apiKey, ...googleMapsLoaderConf });
        loader.load();
        googleMapsScriptLoaded = true;
    }
    const instance = L.gridLayer.googleMutant(googleMutantProps);
    if (googleMapsAddLayers) {
        googleMapsAddLayers.forEach((layer) => {
            instance.addGoogleLayer(layer.name, layer.options);
        });
    }
    return { instance, context };
};

export default createLayerComponent(createLeafletElement, updateGridLayer);
