import "./App.css";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { Marker, Polyline } from "react-leaflet";
import MapView from "./components/Map";
import * as L from "leaflet";
import MarkerIcon from "./assets/svg/marker.svg";
import { greenMarker, redMarker } from "./components/Map/MarkerIcons";

const useStyles = makeStyles((theme) => ({
  container: {
    "& .leaflet-container": {
      width: "100%",
      height: "95vh",
      flexGrow: 1,
      borderRadius: 16,
      borderTopRightRadius: 16,
      borderBottomRightRadius: 16,
    },
  },
  card: {
    backgroundColor: "#f6f7f9",
    marginTop: 16,
    color: "#000",
    padding: 16,
  },
}));

const myIcon = L.icon({
  iconUrl: MarkerIcon,
  iconRetinaUrl: MarkerIcon,
  iconSize: [40, 40],
  iconAnchor: [32, 64],
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});

function App(props) {
  const classes = useStyles();
  const [view, setView] = useState(1);
  const bounds = [
    [21.2271104, 72.8530944],
    [21.5476587, 72.7868678],
    [21.0987858, 72.1067898],
    [21.4587385, 72.9788708],
  ];
  const center = [51.505, -0.09];

  const polyline = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ];
  return (
    <div className="App">
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Paper
            style={{
              fontWeight: "bold",
              padding: ".1rem",
              borderRadius: 5,
              marginTop: 10,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
            elevation={3}
          >
            Example
          </Paper>
          <Paper
            style={{
              padding: ".1rem",
              borderRadius: 5,
              marginTop: 10,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              border: view === 1 ? "2px solid red" : "none",
            }}
            elevation={3}
            onClick={(e) => setView(1)}
          >
            Markers
          </Paper>
          <Paper
            style={{
              padding: ".1rem",
              borderRadius: 5,
              marginTop: 10,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              border: view === 2 ? "2px solid red" : "none",
            }}
            elevation={3}
            onClick={(e) => setView(2)}
          >
            Marker with polylines
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper style={{ padding: ".1rem", borderRadius: 16 }} elevation={3}>
            <div className={classes.container}>
              <MapView position={[21.2271104, 72.8530944]} zoom={8}>
                {bounds.map((item, index) => {
                  return (
                    <Marker
                      key={index}
                      icon={index % 2 === 1 ? greenMarker : redMarker}
                      position={L.latLng(
                        parseFloat(item[0]),
                        parseFloat(item[1])
                      )}
                    ></Marker>
                  );
                })}
                {view === 2 && (
                  <Polyline
                    // key={index}
                    positions={bounds}
                    pathOptions={{
                      color: "red",
                      // weight: 2,
                    }}
                  />
                )}
              </MapView>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
