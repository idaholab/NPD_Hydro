"use client";

// React
import React, { useCallback } from "react";

// Hooks
import { useState, useEffect } from "react";

// Helpers
import { ValidateLayers } from "./helpers";

// Material
import { Alert, Box, Grid, Skeleton, Typography } from "@mui/material";

// // Components
import Sidebar from "./components/sidebar";
// import Map from "./Map/Map";
// import DataTable from "./Map/DataTable";

// Dependencies
import axios from "axios";

// Google Analytics
import ReactGA from "react-ga4";

// Store
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

function Tool() {
  // // GA pageview
  // // ReactGA.send({ hitType: "pageview", page: "/tool" });

  // Window dimensions
  let [mobile, setMobile] = useState(false);

  // Layers
  const communitySelector = useAppSelector((state) => state.community);
  const environmentalSelector = useAppSelector((state) => state.environmental);
  const gridSelector = useAppSelector((state) => state.grid);
  const industrySelector = useAppSelector((state) => state.industry);
  const batterySelector = useAppSelector((state) => state.battery);
  const hydrogenSelector = useAppSelector((state) => state.hydrogen);
  const visibleSelector = useAppSelector((state) => state.visible);

  // Weights
  const weightSelector = useAppSelector((state) => state.weight);

  // Map
  const [data, setData] = useState();
  const [render, setRender] = useState(false);
  const [dams, setDams] = useState<Array<object> | null>();
  const [popup, setPopup] = useState();

  // Validate Query
  const [valid, setValid] = useState(true);

  // // API URL
  // const url = process.env.NEXT_PUBLIC_DJANGO_HOST;

  // Logic
  const [submit, setSubmit] = useState(true);

  // Hooks
  const submitCallback = useCallback(async () => {
    if (!submit) return;
    // If true, render Skeletons
    setRender(true);
    // If true, render Map and Data Table
    setDams(null);

    // GA event
    ReactGA.event({
      category: "tool",
      action: "query npd",
    });

    let validate = ValidateLayers(
      communitySelector,
      environmentalSelector,
      gridSelector,
      industrySelector
    );

    setValid(validate);

    if (validate) {
      await axios
        .post(
          `api/npd`,
          JSON.stringify({
            layers: {
              visibleLayers: visibleSelector,
              communityLayers: communitySelector,
              environmentalLayers: environmentalSelector,
              gridLayers: gridSelector,
              industryLayers: industrySelector,
              batteryLayers: batterySelector,
              hydrogenLayers: hydrogenSelector,
            },
            weights: weightSelector.weights,
          })
        )
        .then((response) => {
          setData(response.data);
          if (response.data.dams) {
            setDams(response.data.dams);
            setRender(false);
            setSubmit(false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Invalid query");
    }
    // eslint-disable-next-line
  }, [submit]);

  useEffect(() => {
    submitCallback();
  }, [submitCallback]);

  useEffect(() => {
    function handleResize() {
      window.innerWidth < 540 ? setMobile(true) : setMobile(false);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box>
      <Grid container sx={{ width: "100%" }}>
        <Grid item xs={4}>
          <Box sx={{ width: "100%", height: "100vh" }}></Box>
        </Grid>
        <Grid item xs={8}>
          <Box
            sx={{
              padding: "2rem 0",
              position: "relative",
              top: "85px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {mobile ? (
              <Box
                sx={{
                  width: "100%",
                  position: "absolute",
                  bottom: 0,
                }}
              >
                <Alert severity="error">
                  Please get on a desktop device to explore the map!
                </Alert>
              </Box>
            ) : (
              <Grid container sx={{ width: "100%" }}>
                <Grid item xs={4}>
                  <Box sx={{ width: "100%", height: "100vh" }}>
                    <Sidebar setSubmit={setSubmit} valid={valid} />{" "}
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box
                    sx={{
                      padding: "2rem 0",
                      position: "relative",
                      top: "85px",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {dams ? (
                      <Box>
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                          Visualization
                        </Typography>
                      </Box>
                    ) : render && valid ? (
                      <Box>
                        <Skeleton
                          variant="rectangular"
                          width={window.innerWidth / 1.5}
                          height={window.innerHeight / 1.75}
                        />
                        <br />
                        <Skeleton
                          variant="rectangular"
                          width={window.innerWidth / 1.5}
                          height={window.innerHeight / 2.75}
                        />
                      </Box>
                    ) : null}
                  </Box>
                </Grid>
              </Grid>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Tool;
