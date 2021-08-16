import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapConfig from '../../config/map-config';
import GoogleLayer from './GoogleLayer';

const useStyles = makeStyles((theme) => ({
    container: {},
}));

export function Map({
    position,
    zoom = 12,
    scrollWheelZoom = false,
    ...props
}) {
    // const { position, zoom = 12, scrollWheelZoom = false, } = props;

    const classes = useStyles();
    const [center] = useState(position);

    return (
        <div className={classes.container}>
            <MapContainer
                center={center}
                zoom={zoom}
                animate={true}
                className="markercluster-map"
                scrollWheelZoom={scrollWheelZoom}
                {...props}
            >
                {MapConfig.isGoogleMapActive ? (
                    <GoogleLayer
                        attribution={MapConfig.attribution}
                        apiKey={MapConfig.apiKey}
                        type={'roadmap'}
                        googleMapsAddLayers={
                            [
                                // { name: 'BicyclingLayer', options: {} },
                                // { name: 'TrafficLayer', options: {} },
                                // { name: 'TransitLayer', options: {} },
                            ]
                        }
                    />
                ) : (
                    <TileLayer
                        attribution={MapConfig.attribution}
                        url={MapConfig.map_view4}
                    />
                )}
                {props.children}
            </MapContainer>
        </div>
    );
}
