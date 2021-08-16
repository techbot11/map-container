import * as L from 'leaflet';
import redMark from '../../assets/images/location-marker-red.png';
import greenMark from '../../assets/images/location-marker-green.png';

export const redMarker = L.icon({
    iconUrl: redMark,
    iconSize: [34, 34],
});

export const greenMarker = L.icon({
    iconUrl: greenMark,
    iconSize: [34, 34],
});
