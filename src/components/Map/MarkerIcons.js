import * as L from 'leaflet';
import redMark from '../../assets/images/location-marker-red@3x.png';
import greenMark from '../../assets/images/location-marker-green@3x.png';
import stopPoint from '../../assets/images/location-marker-orange.png';

export const redMarker = L.icon({
    iconUrl: redMark,
    iconSize: [34, 34],
});

export const greenMarker = L.icon({
    iconUrl: greenMark,
    iconSize: [34, 34],
});

export const redFilledMarker = L.icon({
    iconUrl:
        'http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-File.png',
    iconSize: [40, 40],
});
export const orangeFilledMarker = L.icon({
    iconUrl: stopPoint,
    iconSize: [40, 40],
});
