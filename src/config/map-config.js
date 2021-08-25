const GOOGLE_MAP_ACTIVE = false,
  MAP_KEY = "",
  ATTRIBUTE = "";
const googleMapConfig = Object.freeze({
  isGoogleMapActive: GOOGLE_MAP_ACTIVE,
  apiKey: MAP_KEY,
  attribution: ATTRIBUTE,
});

const openStreetMapConfig = Object.freeze({
  isGoogleMapActive: GOOGLE_MAP_ACTIVE,
  attribution: ATTRIBUTE,
  map_view1: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  map_view2: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
  map_view3:
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png",
  map_view4: `https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png?api_key=6f81a678-3910-4b83-bda7-8df94e3bd2e9`,
});

export default GOOGLE_MAP_ACTIVE ? googleMapConfig : openStreetMapConfig;
