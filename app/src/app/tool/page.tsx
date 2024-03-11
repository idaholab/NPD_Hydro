"use client";

// React
import React, { useCallback } from "react";

// Hooks
import { useState, useEffect } from "react";

// Helpers
import { validate, query } from "./helpers";

// Material
import { Alert, Box, Drawer, Grid, Skeleton, Typography } from "@mui/material";

// Next
import dynamic from "next/dynamic";

// Components
import Sidebar from "./components/sidebar";
import DataTable from "./map/datatable";
// You have to disable server side rendering for ArcGIS maps because they need access to the DOM at runtime
const Map = dynamic(() => import("./map/map"), {
  ssr: false,
});

// Dependencies
import axios from "axios";

// Google Analytics
import ReactGA from "react-ga4";

// Store
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

function Tool() {
  // GA pageview
  ReactGA.send({ hitType: "pageview", page: "/tool" });

  // Responsiveness
  let [open, setOpen] = useState(true);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

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
  const weightSelector = useAppSelector((state) => state.weight.weights);

  // Map
  const [data, setData] = useState();
  const [render, setRender] = useState(false);
  const [dams, setDams] = useState<Array<object> | null>();
  const [popup, setPopup] = useState();

  // Validate Query
  const [valid, setValid] = useState(true);

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

    let valid = validate(
      communitySelector,
      environmentalSelector,
      gridSelector,
      industrySelector
    );

    setValid(valid);

    if (valid) {
      let response = await query(
        communitySelector,
        environmentalSelector,
        gridSelector,
        industrySelector,
        visibleSelector,
        batterySelector,
        hydrogenSelector,
        weightSelector
      );

      setData(response!.metadata);
      setDams(response!.dams);
      setRender(response!.render);
      setSubmit(response!.submit);
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
        {open ? (
          <Grid item xs={2} sm={3} md={3} lg={3}>
            <Sidebar
              handleClose={handleClose}
              handleOpen={handleOpen}
              setSubmit={setSubmit}
              valid={valid}
            />
          </Grid>
        ) : (
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Sidebar
              handleClose={handleClose}
              handleOpen={handleOpen}
              setSubmit={setSubmit}
              valid={valid}
            />
          </Grid>
        )}
        {open ? (
          <Grid item xs={10} sm={9} md={9} lg={9}>
            <Box
              sx={{
                padding: "2rem 0",
                position: "relative",
                top: "10vh",
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
                  <Map data={data} setPopup={setPopup} />
                  <DataTable dams={dams} popup={popup}></DataTable>
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
        ) : (
          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Box
              sx={{
                padding: "2rem 0",
                position: "relative",
                top: "10vh",
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
                  <Map data={data} setPopup={setPopup} />
                  <DataTable dams={dams} popup={popup}></DataTable>
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
        )}
      </Grid>
    </Box>
  );
}

export default Tool;
